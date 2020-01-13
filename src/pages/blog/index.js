import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Header, BlogHeader, BlogDescription } from "../../components/header"
import styled from "styled-components"

const BlogContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

const BlogCard = styled.div` 
  background-color: black;
  margin: 16px;
  padding: 16px;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 8px 10px 15px 0.5px rgba(122,122,122,0.6);
  
  @media (min-width: 768px) {
    max-width: 300px;
  }
  
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`

const ParentLinkStyle = styled(Link)`
  text-decoration: none;
`

export default () => (
  <Layout>
    <BlogContainer>
      <ParentLinkStyle to="/blog/images-sucks-so-lets-figure-them-out/">
        <BlogCard>
          <BlogHeader headerText="Images Sucks so Lets Figure Them Out"/>
          <BlogDescription headerText="This is how I built and designed my portfolio"/>
        </BlogCard>
      </ParentLinkStyle>
      <ParentLinkStyle>
        <BlogCard>
          <BlogHeader headerText="creating-my-portfolio"/>
          <BlogDescription headerText="This is how I built and designed my portfolio"/>
        </BlogCard>
      </ParentLinkStyle>
    </BlogContainer>
  </Layout>
)
