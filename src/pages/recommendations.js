import React from "react"
import Layout from "../components/layout"
import { Header, SubHeader } from "../components/header"
import styled from "styled-components"

const Paragraph = styled.p`
    line-height: 1.5rem
`

export default () => (
  <Layout>
    <Header headerText="Recommendations" />
    <Paragraph>I'm constantly consuming some type of content, it could be anything from a podcast to a youtube video. And most of the time I try to curate a list so that I can send it to every one I know would
        appreciate it. This is my list.. I'll be updating it with the latest content and also maybe make some type of rating system for it so everyone knows that to look at first</Paragraph>

    <SubHeader headerText="Podcast"/>
    <Paragraph> Podcasts are definitely my favorite content medium. It so simple to put it on and start your day. and its also the simplest to stay up to date with some of your favorite individuals and topics.
        Below is a list of podcasts that I would definitely checkout if I was you!</Paragraph>

    <h3>Code</h3>
    <ul>
        <li>Syntex</li>
        <li>Software Engineering Radio</li>
    </ul>

    <h3>Entrepreneurship</h3>
    <ul>
      <li>Indy Hackers</li>
      <li>How I Built This</li>
      <li>Startup</li>
      <li>The Kevin Rose Show</li>
      <li>The Tim Ferris </li>
    </ul>

    <h3>Sports</h3>
    <ul>
      <li>Chris Sims Unbuttoned</li>
      <li>The Lefkoe Show</li>
      <li>Stick to Football</li>
    </ul>

    <h3>Other</h3>
    <ul>
      <li>The Ground Up Show</li>
      <li>The Ground Up Show</li>
      <li>The Joe Rogan Experience</li>
    </ul>

    <SubHeader headerText="Books"/>
  </Layout>
)
