import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faSquareFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const SocialPages = () => {
  return (
    <div>
      <h2>Social</h2>
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
  );
};

export default SocialPages;
