import React from 'react'
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby";

import CollectionBox from "./CollectionBox";

const getCollectionBoxes = graphql`
{
    allContentfulHome {
      edges {
        node {
          linkImage {
            fluid {
              src
            }
          }
          imageName
        }
      }
    }
  }
`

export default function CollectionBoxes() {

    return (
        <StaticQuery query={getCollectionBoxes} render={data => {
            return (
                <div className="collection-boxes">
                    <div className="collection-boxes-inner">
                        {data.allContentfulHome.edges.map(({ node: collectionBox }) => {
                            return (
                                <CollectionBox key={collectionBox.imageName} collectionBox={collectionBox} />
                            )
                        })}
                    </div>
                </div>
            )
        }
        } />
    );
}
