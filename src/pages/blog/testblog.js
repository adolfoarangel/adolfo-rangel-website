import React from "react"
import Layout from "../../components/layout"
import { Header, BlogHeader, BlogDescription } from "../../components/header"
import TextBoundary from "../../components/TextBoundary"


export default () => (
  <Layout>
    <TextBoundary>
      <Header headerText="SomeText"/>
    </TextBoundary>
  </Layout>
)