/**
 * Achievement cards. `text` is JSX so numbers and titles can be highlighted
 * with the .highlight1 / .highlight2 classes. `link` is optional.
 */
export const achievements = [
  {
    text: (
      <>
        <span className="highlight2">Expert</span> on Codeforces with a maximum rating of{" "}
        <span className="highlight1">1678</span> and <span className="highlight1">1,850+</span>{" "}
        problems solved.
      </>
    ),
    link: "https://codeforces.com/profile/tanjil-ahmed",
  },
  {
    text: (
      <>
        <span className="highlight2">3-star (⭐)</span> on CodeChef with a maximum contest rating of{" "}
        <span className="highlight1">1731</span>.
      </>
    ),
    link: "https://www.codechef.com/users/tanjilvai",
  },
  {
    text: (
      <>
        Qualified for the <span className="highlight2">ICPC Asia Dhaka Regional Contest</span>{" "}
        representing Sylhet Engineering College (<span className="highlight1">2023</span>).
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        Qualified for the{" "}
        <span className="highlight2">National Collegiate Programming Contest (NCPC) 2023</span> and
        competed in <span className="highlight2">BUET IUPC 2022</span>,{" "}
        <span className="highlight2">SUST IUPC 2023</span> and{" "}
        <span className="highlight2">SUST IUPC 2024</span>.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        <span className="highlight1">1st Runners-Up</span> at the{" "}
        <span className="highlight2">SEC Idea Hackathon 2022</span>, pitching a technology-based
        solution under time pressure.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        <span className="highlight1">2nd Runners-Up</span> in the{" "}
        <span className="highlight2">CSE DAY Programming Contest 2020</span> at Sylhet Engineering
        College.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        Graduated <span className="highlight2">With Distinction</span> with a CGPA of{" "}
        <span className="highlight1">3.80/4.00</span> in Computer Science &amp; Engineering.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        Solved <span className="highlight1">2,000+</span> DSA problems across Codeforces, CodeChef,
        LightOJ and UVa.
      </>
    ),
    link: "https://lightoj.com/user/ahmedtanjil1",
  },
];
