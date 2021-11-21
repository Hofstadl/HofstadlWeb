import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import {Parallax} from "react-parallax"

import parallaxFront from "../data/images/start/parallaxFront.png"
import parallaxBack from "../data/images/start/parallaxBack.jpg"

export default function Home() {
    return (
        <Layout>
            <Parallax
                strength={-100}
                bgImage={parallaxBack}
                bgClassName={"object-cover"}
            >
                <div className={"h-screen"}>
                    <img
                        src={parallaxFront}
                        className={"bottom-0 absolute h-[50vh] object-cover w-screen align-bottom z-50"}
                        alt={"Try to reload the site if this text is shown: Parallax layer 2 wasn't loaded properly"}/>
                </div>
            </Parallax>
            <div className={"h-screen"}>HiHi</div>
        </Layout>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;