import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Header } from "../components/header"

const Hero = styled.div`
  height: 90vh; 
  width: 100vw;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WidthControl = styled.div`
padding: 20px;
text-align:center;
`

export default () => {

  return (
    <Layout>
      <Hero>
        <WidthControl>
          <Header headerText="Welcome to my space in the world" />
          <Header headerText="where I can share and create everything I want " />
        </WidthControl>
      </Hero>
    </Layout>
  )
}
