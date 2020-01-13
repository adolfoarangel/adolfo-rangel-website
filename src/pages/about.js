import React from "react"
import Layout from "../components/layout"
import { Header, SubHeader } from "../components/header"
import TextBoundary from "../components/TextBoundary"
import styled from "styled-components"
import MooseImage from "../../static/Images/Moose.png"

const ProfileImage = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 200px;
    background-image: url(${MooseImage});
    background-repeat: no-repeat, repeat;
    background-size: cover;
    margin: auto;

    @media (max-width: 768px) {
        height: 200px;
        width: 200px;
    }
`

export default () => (
  <Layout>
    <TextBoundary>
    <ProfileImage/>
    <Header headerText="Hi, my name is Adolfo Rangel I’m currently a Softwoft Developer based out of Orlando...

                        But I don’t really like to limit myself as a software developer since I can do so much more..

                        Currently I started a yoga stufio with my sister based out of miami florida.. I also am madly in love with sports .. espcial football... " />
    </TextBoundary>
  </Layout>
)
