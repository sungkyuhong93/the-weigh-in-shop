import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react"

// const productTemplate = ({ data }) => {
//   const { productTitle, productCategory, productDescription: { productDescription }, id, image, productPrice } = data.contentfulProductItem
//   return (
//     <Layout>
//       <div className="collection">
//         {productCategory}
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
// query($productCategory:String!) {
//     contentfulProductItem(
//       filter: { productCategory: { lt: $productCategory} }
//     ) {
//       productTitle
//       productCategory
//       productPrice
//       productDescription {
//         productDescription
//       }
//       id
//     image {
//             fluid {
//               src
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//     }
//   }
// `
