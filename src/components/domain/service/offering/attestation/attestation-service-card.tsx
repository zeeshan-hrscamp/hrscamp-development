import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingServiceBenefitCard from "./attestation-service-benefit-card";
import TrainingProcessCard from "./attestation-process-card";
import AttestationServiceBenefitCard from "./attestation-service-benefit-card";
import AttestationProcessCard from "./attestation-process-card";

const AttestationServiceCard = () => {
  const data = useStaticQuery(graphql`
    query AttestationServiceCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "offering" }
          section_title: {
            eq: "Document Attestation and Verification of Antecedents"
          }
        }
      ) {
        html
        frontmatter {
          section_title
          service_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const verticleSectionContainer = `
      flex
      flex-col
    `;

  return (
    <>
      <div className="flex flex-col">
        <div className="pt-5">
          <h1>{frontmatter.section_title}</h1>
          <hr />
        </div>
        <div className="flex flex-row">
          <div className="basis-1/3">
            <GatsbyImage
              image={getImage(frontmatter.service_image)}
              alt={frontmatter.title}
            />
          </div>
          <div className="flex flex-col basis-2/3">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
            <AttestationServiceBenefitCard />

            <hr />
            <AttestationProcessCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttestationServiceCard;
