import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import FaqProfile from "./faq-profile/faq-profile";
import LetsTalk from "../../base/letstalk";
const FaqAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex border ">
      <div
        style={{
          cursor: "pointer",
          display: "flex",
        }}
        onClick={toggleAccordion}
      >
        <b className="font-bold ml-8 my-3 text-white">{question}</b>
        {isOpen && <p className="w-96 mx-32 mt-2 text-white">{answer}</p>}
      </div>
      <span
        className="ml-auto mt-3 mr-4"
        style={{ color: "white", cursor: "pointer" }}
        onClick={toggleAccordion}
      >
        {isOpen ? (
          <p style={{ color: "red" }}>▽</p>
        ) : (
          <p style={{ color: "red" }}>▷</p>
        )}
      </span>
    </div>
  );
};

const Faqs = () => {
  const data = useStaticQuery(graphql`
  query FaqsQuery {
   allMarkdownRemark(
    filter: { 
     frontmatter: { 
      domain: { eq: "faq" }, 
      answer: { ne: null, regex: "/\\S/" } 
     } 
    }
    sort: { frontmatter: { no: ASC } }
   ) {
    nodes {
     frontmatter {
      question
      answer
     }
    }
   }
  }
 `);
  return (
    <div className="bg-black">
      <FaqProfile />
      <hr className="bg-white" />

      {data.allMarkdownRemark.nodes.map((node, index) => (
        <FaqAccordion
          key={index}
          question={node.frontmatter.question}
          answer={node.frontmatter.answer}
        />
      ))}
      <LetsTalk/>
    </div>
  );
};

export default Faqs;
