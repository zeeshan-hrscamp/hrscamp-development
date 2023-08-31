// import * as React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitterSquare,
//   faSquareFacebook,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link, graphql, useStaticQuery } from "gatsby";

// const BlogCategory = () => {
//   const data = useStaticQuery(graphql`
//     query BlogCategoryQuery {
//       allMdx(filter: { frontmatter: { domain: { eq: "blog" } } }) {
//         group(field: { frontmatter: { category: SELECT } }) {
//           fieldValue
//         }
//       }
//     }
//   `);

//   return (
//     <>
//       {data.allMdx.group.map((node) => (
//         <div>
//           <ul>
//             <li>{node.fieldValue}</li>
//           </ul>
//         </div>
//       ))}
//     </>
//   );
// };

// export default BlogCategory;
