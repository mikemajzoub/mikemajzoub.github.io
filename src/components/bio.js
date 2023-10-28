/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Along with writing, I enjoy
          {` `}
          <a
            href={`https://www.linkedin.com/in/mikemajzoub/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            making creativity software
          </a>
          ,{` `}
          <a
            href={`https://500px.com/p/mikemajzoub?view=photos`}
            target="_blank"
            rel="noopener noreferrer"
          >
            taking photos
          </a>
          , and{` `}
          <a
            href={`https://soundcloud.com/mikemajzoub/sets/song-drafts`}
            target="_blank"
            rel="noopener noreferrer"
          >
            writing songs
          </a>
          . {` `}
          <a
            href={`https://www.twitter.com/mikemajzoub/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {` `} is the best way to contact me.
        </p>
      )}
    </div>
  )
}

export default Bio
