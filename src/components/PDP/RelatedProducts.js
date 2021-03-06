import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Product from "../Home/Product"

const RelatedProducts = ({ productCategoryTag, productTitleTag }) => {
  const { relatedProducts } = useStaticQuery(graphql`
    {
        relatedProducts:allContentfulProductItem {
          edges {
            node {
              id
              productTitle
              productCategory
              productPrice
              image {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }  
  `)

  return (
    <div className="pdp-related">
      <h4 style={{ textAlign: 'center' }}>You May Also Like</h4>
      <div className="related-inner">
        {relatedProducts.edges.filter(({ node: product }) => {
          return (
            product.productCategory == productCategoryTag && product.productTitle !== productTitleTag
          )
        }).map(({ node: product }) => {
          return (
            <Product key={product.id} product={product} />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts;