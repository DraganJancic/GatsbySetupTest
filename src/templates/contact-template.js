import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function ContactTemplate({ data }) {
  const { allWpPage: { nodes }} = data
  const { title, content, language: { locale: lang}, translations } = nodes[0]
  
  return (
    <Layout language={lang} translations={translations[0]}>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      nodes {
        title
        content
        language {
          locale
        }
        translations {
          uri
        }
      }
    }
  }
`