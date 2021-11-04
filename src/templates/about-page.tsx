import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { ContentProps, HTMLContent } from '../components/Content'

type TemplateProps = {
  title: string;
  content: string;
  contentComponent: ({ content, className }: ContentProps) => JSX.Element;
}

type Props = {
  data:any;
}

export const AboutPageTemplate = ({ title, content, contentComponent }: TemplateProps) => {
  const PageContent = contentComponent as any || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutPage = ({ data }: Props) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
