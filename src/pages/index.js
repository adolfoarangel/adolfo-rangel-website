import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Header, SubHeader} from "../components/header"

const Hero = styled.div`
  height: 90vh;
  width: 96vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WidthControl = styled.div`
  padding: 20px;
  text-align: center;
`

export default () => {
  return (
    <Layout>
      <Hero>
        <WidthControl>
          <Header headerText="Welcome to my space in the world..." />
          <SubHeader headerText="Where I share the little bits of acknowledge I gain." />
        </WidthControl>
      </Hero>
    </Layout>
  )
}
