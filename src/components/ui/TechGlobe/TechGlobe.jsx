/**
 * TechGlobe
 *
 * The rotating 3D sphere of technology logos in the hero (three.js).
 *
 * How it works:
 *  1. Each logo is drawn onto a 128px canvas and used as a sprite texture.
 *  2. Sprites are spread evenly over a sphere (Fibonacci lattice).
 *  3. On desktop, nearby logos are joined with faint lines.
 *  4. The group auto-rotates and can be dragged with the mouse.
 *
 * Performance: rendering pauses when the globe is off-screen or the tab is
 * hidden, mobile gets a lower pixel ratio and no lines, and reduced-motion
 * visitors get a single static frame. Everything is disposed on unmount.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { PUBLIC_URL } from "../../../data";
import "./TechGlobe.css";

/* ---------- Tunables ---------- */
const CANVAS_SIZE = 375; // rendered size in CSS px
const TEXTURE_SIZE = 128; // logo texture resolution
const SPHERE_RADIUS = 27;
const SPRITE_SIZE = 6;
const AUTO_ROTATE_SPEED = 0.005; // radians per frame
const DRAG_SENSITIVITY = 0.005; // radians per dragged px
const LINE_DISTANCE = SPHERE_RADIUS * 0.75; // join logos closer than this
const ACCENT_COLOR = 0x00ffff;

/** Logo files in public/images/tech-globe/. */

const ICON_FILES = [
  "astro-original.svg",
  "bootstrap-original.svg",
  "c-original.svg",
  "cplusplus-original.svg",
  "csharp-original.svg",
  "css3-original.svg",
  "django-plain.svg",
  "djangorest-original.svg",
  "docker-original.svg",
  "express-original-wordmark.svg",
  "git-original.svg",
  "github-original-wordmark.svg",
  "gitlab-original.svg",
  "html5-original.svg",
  "java-original.svg",
  "javascript-original.svg",
  "mongodb-original.svg",
  "mysql.svg",
  "netlify-original.svg",
  "nextjs-original.svg",
  "nodejs-original.svg",
  "npm-original-wordmark.svg",
  "postgresql-original.svg",
  "postman-original.svg",
  "prisma-original.svg",
  "python.svg",
  "react-original.svg",
  "redux-original.svg",
  "sass-original.svg",
  "tailwindcss-original.svg",
  "typescript-original.svg",
  "vercel-original-wordmark.svg",
  "vscode-original.svg",
  "zustand-original.svg",
];

const ICON_URLS = ICON_FILES.map((file) => `${PUBLIC_URL}/images/tech-globe/${file}`);

/** Frees GPU memory held by every geometry, material and texture in `object`. */
const disposeObject = (object) => {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();

    const materials = child.material
      ? Array.isArray(child.material)
        ? child.material
        : [child.material]
      : [];

    materials.forEach((material) => {
      if (material.map) material.map.dispose();
      material.dispose();
    });
  });
};

/**
 * Evenly distributes `samples` points over a sphere (Fibonacci lattice).
 * @returns {THREE.Vector3[]}
 */
const fibonacciSpherePoints = (samples, sphereRadius) => {
  const points = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle

  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    points.push(
      new THREE.Vector3(
        Math.cos(phi) * r * sphereRadius,
        y * sphereRadius,
        Math.sin(phi) * r * sphereRadius,
      ),
    );
  }
  return points;
};

const TechGlobe = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = containerRef.current;
    const section = sectionRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    /* ---------- Scene setup ---------- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(CANVAS_SIZE, CANVAS_SIZE);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    canvas.appendChild(renderer.domElement);

    const domElement = renderer.domElement;
    const group = new THREE.Group();
    const sprites = [];
    let loadedCount = 0;
    let rafId = null;
    let isInView = true;
    let isPageVisible = !document.hidden;

    const points = fibonacciSpherePoints(ICON_URLS.length, SPHERE_RADIUS);

    /* ---------- Connecting lines (desktop only) ---------- */
    const connectIconsWithLines = () => {
      if (isMobile || prefersReducedMotion) return;

      const lineMaterial = new THREE.LineBasicMaterial({
        color: ACCENT_COLOR,
        transparent: true,
        opacity: 0.3,
      });

      for (let i = 0; i < sprites.length; i++) {
        for (let j = i + 1; j < sprites.length; j++) {
          const pos1 = sprites[i].position;
          const pos2 = sprites[j].position;
          const distance = pos1.distanceTo(pos2);

          if (distance < LINE_DISTANCE) {
            const geometry = new THREE.BufferGeometry().setFromPoints([pos1.clone(), pos2.clone()]);
            group.add(new THREE.Line(geometry, lineMaterial));
          }
        }
      }
    };

    /* ---------- Logo sprites ---------- */
    // Lines are drawn once every image has either loaded or failed.
    const onIconSettled = () => {
      loadedCount++;
      if (loadedCount === ICON_URLS.length) connectIconsWithLines();
    };

    ICON_URLS.forEach((url, i) => {
      const img = new Image(TEXTURE_SIZE, TEXTURE_SIZE);

      img.onload = () => {
        const textureCanvas = document.createElement("canvas");
        textureCanvas.width = TEXTURE_SIZE;
        textureCanvas.height = TEXTURE_SIZE;
        const ctx = textureCanvas.getContext("2d");
        ctx.clearRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);
        ctx.drawImage(img, 0, 0, TEXTURE_SIZE, TEXTURE_SIZE);

        const texture = new THREE.CanvasTexture(textureCanvas);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.needsUpdate = true;

        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthTest: true,
          }),
        );
        sprite.scale.set(SPRITE_SIZE, SPRITE_SIZE, 1);
        sprite.position.copy(points[i]);

        group.add(sprite);
        sprites.push(sprite);
        onIconSettled();
      };
      img.onerror = onIconSettled;

      img.src = url;
    });

    scene.add(group);
    camera.position.z = 50;

    // Faint halo behind the logos.
    const glowGeometry = new THREE.SphereGeometry(SPHERE_RADIUS + 3.5, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: ACCENT_COLOR,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeometry, glowMaterial));

    /* ---------- Mouse drag to rotate ---------- */
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      group.rotation.y += dx * DRAG_SENSITIVITY;
      group.rotation.x += dy * DRAG_SENSITIVITY;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    /* ---------- Render loop (pauses when not visible) ---------- */
    const shouldAnimate = () => isInView && isPageVisible && !prefersReducedMotion;

    const animate = () => {
      if (!shouldAnimate()) {
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(animate);

      if (!isDragging) group.rotation.y += AUTO_ROTATE_SPEED;

      // Keep every logo facing the camera.
      for (let i = 0; i < group.children.length; i++) {
        const obj = group.children[i];
        if (obj instanceof THREE.Sprite) obj.lookAt(camera.position);
      }

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (!rafId && shouldAnimate()) animate();
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) startAnimation();
      },
      { threshold: 0.05 },
    );

    if (section) visibilityObserver.observe(section);

    const onVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) startAnimation();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    domElement.addEventListener("mousemove", onMouseMove);

    // Always draw one frame; only animate when motion is allowed.
    renderer.render(scene, camera);
    if (!prefersReducedMotion) startAnimation();

    /* ---------- Cleanup ---------- */
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("mousemove", onMouseMove);

      disposeObject(scene);
      renderer.dispose();

      if (canvas.contains(domElement)) {
        canvas.removeChild(domElement);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="iconssphear-section fade-in">
      <div className="iconssphear-tag-cloud" ref={containerRef} />
    </div>
  );
};

export default TechGlobe;
