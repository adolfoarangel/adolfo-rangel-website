import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Header } from "../../components/header"
import styled from "styled-components"

const BlogList = styled.div`

`

const BlogContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  max-height: 400px;
`

const BlogLink = styled(Link)`
  color: white; 
  text-decoration: none;
  
  &:hover { 
    color: #14ffec;
  }
`

export default () => (
  <Layout>
    <Header headerText="Latest Post Somethignn"/>


    <BlogList>
      <BlogLink to="/blog/2020-time-to-come-out-and-say-it">
        <BlogContainer>
          <h2>2020 Time to come out and say it!</h2>
          <h3>Setting some goals so that everyone can keep me on track</h3>
        </BlogContainer>
      </BlogLink>
    </BlogList>
  </Layout>
)
