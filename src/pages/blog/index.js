import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Header, BlogHeader, BlogDescription } from "../../components/header"
import styled from "styled-components"
import blogCardImage from "../../../public/Images/BridgewWebsite.jpg"


const BlogCard = styled.div` 
  overflow: auto; 
  height: 30vh;
  width: 96vw;
  background: url(${blogCardImage}); 
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-bottom: 2vh;
  
  @media (max-width: 768px) {
    height: 40vh;
  }
`

const BlogCardLayer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(50, 50, 50, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5vh 5vw;
`

const ParentLinkStyle = styled(Link)`
  text-decoration: none;
`

export default () => (
  <Layout>
    <ParentLinkStyle>
      <BlogCard>
        <BlogCardLayer>
          <BlogHeader headerText="Portfolio In a Nutshell"/>
          <BlogDescription headerText="This is how I built and designed my portfolio"/>
        </BlogCardLayer>
      </BlogCard>
    </ParentLinkStyle>
    <Header headerText="Some other stuff I wrote" />
    <ParentLinkStyle>
      <BlogCard>
        <BlogCardLayer>
          <BlogHeader headerText="Portfolio In a Nutshell"/>
          <BlogDescription headerText="This is how I built and designed my portfolio"/>
        </BlogCardLayer>
      </BlogCard>
    </ParentLinkStyle>
    <ParentLinkStyle>
      <BlogCard>
        <BlogCardLayer>
          <BlogHeader headerText="Portfolio In a Nutshell"/>
          <BlogDescription headerText="This is how I built and designed my portfolio"/>
        </BlogCardLayer>
      </BlogCard>
    </ParentLinkStyle>
    <ParentLinkStyle>
      <BlogCard>
        <BlogCardLayer>
          <BlogHeader headerText="Portfolio In a Nutshell"/>
          <BlogDescription headerText="This is how I built and designed my portfolio"/>
        </BlogCardLayer>
      </BlogCard>
    </ParentLinkStyle>
  </Layout>
)
