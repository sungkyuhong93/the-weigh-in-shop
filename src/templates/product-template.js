import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react"
import RelatedProducts from "../components/PDP/RelatedProducts";

import { connect } from "react-redux";
import { addItem, cartToggle } from "../state/actions"


const productTemplate = ({ data, addItem, cartToggle }) => {
  const { productTitle, productCategory, productDescription: { productDescription }, id, image, productPrice } = data.contentfulProductItem
  const productItem = data.contentfulProductItem


  const addOpenCart = () => {
    addItem(productItem);
    cartToggle();
  };


  return (
    <Layout>
      <div className="pdp">
        <div className="pdp-inner">
          <div className="pdp-col">
            <Img fluid={image.fluid} />
          </div>

          <div className="pdp-col pdp-col-2">
            <h3 className="pdp-title">{productTitle}</h3>
            <h5 className="pdp-price">${productPrice}</h5>
            <div className="pdp-desc">
              <p className="large">
                {productDescription}
              </p>
            </div>
            <div>
              <button
                onClick={
                  addOpenCart
                }
                className="pdp-add">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="pdp-related">
          <div className="pdp-related-inner">
            <RelatedProducts productTitleTag={productTitle} productCategoryTag={productCategory} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($productTitle:String!) {
    contentfulProductItem(productTitle:{eq:$productTitle}) {
      productTitle
      productCategory
      productPrice
      productDescription {
        productDescription
      }
      id
    image {
            fluid {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
    }
  }
`



export default connect(null, { addItem, cartToggle })(productTemplate);