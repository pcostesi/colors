import * as React from 'react'
import Link from 'gatsby-link'

interface IndexPageProps {
  data: any;
}

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => {
  return (
    <div>
      <h1>
        {data.site.siteMetadata.title}
      </h1>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.frontmatter.title}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>
            {node.excerpt}
          </p>
        </div>
      )}
    </div>
  )
}


export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
