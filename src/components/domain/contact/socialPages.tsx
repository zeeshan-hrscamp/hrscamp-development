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
      <h2>Stay Connected, Stay Informed</h2>
      <p>
        Connect with HRS Camp on our dynamic social media pages. Follow us on
        Facebook, Instagram, LinkedIn, and more to access the latest industry
        insights, job market trends, and exciting career opportunities. Join our
        online community and stay informed with the click of a button.
      </p>
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
