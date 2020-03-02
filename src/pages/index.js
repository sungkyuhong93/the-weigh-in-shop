import React from "react"
import { Link, graphql } from "gatsby"
import { connect } from "react-redux";

import { toggleDarkMode } from "../state/actions";

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Products from "../components/Home/Products";

const IndexPage = ({ data, toggleDark, toggleDarkMode }) => {
  console.log(toggleDark);
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title='the weigh in shop'
        styleClass="default-background"
      />
      <Products />
    </Layout>
  )
}

export const query = graphql`
{
  img: file(relativePath: {eq:"hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
const mapStateToProps = state => ({
  toggleDark: state.toggle.isDarkMode
});

export default connect(mapStateToProps, { toggleDarkMode })(IndexPage);