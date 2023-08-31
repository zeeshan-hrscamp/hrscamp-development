import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faSquareFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const SocialPost = () => {
  return (
    <div>
      <p>Share This Story, Choose Your Platform!</p>
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

export default SocialPost;
