import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faSquareFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const SocialPageLink = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a href="https://facebook.com/thecottoncandid/">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="flex justify-center">
          <h3>Let's Connect</h3>
        </div>
      </div>
    </>
  );
};

export default SocialPageLink;
