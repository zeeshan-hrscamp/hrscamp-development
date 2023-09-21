import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faSquareFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const OfficeLink = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Link to={`/contact`}>
            <StaticImage
              src="../../../../images/landmark-solid.png"
              width={100}
              height={100}
              alt="landmark-solid"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <h3>Visit Our Office</h3>
        </div>
      </div>
    </>
  );
};

export default OfficeLink;
