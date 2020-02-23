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
                    src
                    ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }  
  `)

    return (
        <div className="pdp-related">
            <h3 style={{ textAlign: 'center' }}>You May Also Like</h3>
            <div className="pdp-inner">
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