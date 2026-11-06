/**
 * Tape
 *
 * Diagonal marquee strip of keywords between sections. The word list is
 * rendered twice back to back so the CSS scroll animation loops seamlessly.
 * Data: src/data/tapeWords.js.
 */
import { Fragment } from "react";

import { tapeWords } from "../../../data";
import { ReactComponent as StarIcon } from "./star.svg";
import "./Tape.css";

const COPIES = 2;

const Tape = () => (
  <div className="tape-section" aria-hidden="true">
    <div className="tape-gradient">
      <div className="tape-container">
        <div className="tape-scroll">
          {Array.from({ length: COPIES }, (_, copy) => (
            <Fragment key={copy}>
              {tapeWords.map((word) => (
                <div key={`${copy}-${word}`} className="tape-item">
                  <span>{word}</span>
                  <StarIcon className="star-icon" />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Tape;
