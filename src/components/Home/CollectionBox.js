import React from 'react'
import BackgroundImage from "gatsby-background-image";


const CollectionBox = ({ collectionBox }) => {
    console.log(collectionBox)
    return (
        <div className="collection-box">
            <BackgroundImage
                className="collection-box-bg"
                fluid={collectionBox.linkImage.fluid}
                style={{ height: '30vh' }}
            >
                <h1>{collectionBox.imageName}</h1>
            </BackgroundImage>
        </div>
    )
}

export default CollectionBox;