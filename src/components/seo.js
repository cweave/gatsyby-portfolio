/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, imageAlt }) => {
  const constructUrl = (baseUrl, path) => (!baseUrl || !path ? null : `${baseUrl}${path}`)

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
        ogImage: file(relativePath: { eq: "og-image.png" }) {
          childImageSharp {
            gatsbyImageData(
				quality: 90
				width: 1080
				layout: CONSTRAINED
			)
          }
        }
      }
    `
  )

  const { siteMetadata } = data.site

  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata?.title

  const defaultImageUrl = constructUrl(data.site.siteMetadata.siteUrl, data.ogImage?.childImageSharp?.gatsbyImageData.images.fallback.src)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata?.author || ``,
        },
        {
          property: "og:image",
          content: defaultImageUrl,
        },
        {
          property: `twitter:creator`,
          content: siteMetadata.social.twitter,
        },
        {
          property: "twitter:image:alt",
          content: imageAlt || "christa-burch.com logo",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
