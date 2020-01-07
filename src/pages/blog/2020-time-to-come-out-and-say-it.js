import React from "react"
import Layout from "../../components/layout"
import { BlogHeader } from "../../components/header"
import styled from "styled-components"

const BlogContainer = styled.div`
  border-bottom: solid;
  padding: 15px;
`

export default () => (
  <Layout>
    <BlogHeader parentText="Blog" parentRoute="/blog" childText="2020 time to come out and say it"/>
  </Layout>
)
