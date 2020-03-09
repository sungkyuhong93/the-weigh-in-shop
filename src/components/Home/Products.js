import React from 'react'
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby";

const getProducts = graphql`
{
    products: allContentfulProductItem {
      edges {
        node {
          id
          productTitle
          productPrice
          productCategory
          image {
            fluid {
              ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
}
`

export default function Products() {
  console.log(getProducts)
  return (
    <StaticQuery query={getProducts} render={data => {
      return (
        <div className="collection-row">
          <h3>All Products</h3>
          <div className="collection-row-inner">
            {data.products.edges.map(({ node: product }) => {
              return (
                <Product key={product.id} product={product} />
              )
            })}
          </div>
        </div>
      )
    }
    } />
  );
}
