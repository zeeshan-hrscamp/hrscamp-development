import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { pid } from "process";

const ProfileImage = ({ profileImages }) => {
  return (
    <>
      {profileImages.map((pImage) => (
        <div>
          this is {pImage.profile_image_title} working
          <GatsbyImage
            image={getImage(pImage.profile_image)}
            alt={pImage.profile_image_title}
          />
        </div>
      ))}
    </>
  );
};

export default ProfileImage;
