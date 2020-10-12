import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer = ({ language }) => {

  const data = useStaticQuery(graphql`
    query FooterData {
      wp {
        optionsPage {
          options_page {
            fieldGroupName
            footerData {
              fieldGroupName
              social {
                fieldGroupName
                socialNetwork {
                  fieldGroupName
                  title
                  url
                }
              }
              textContent {
                fieldGroupName
                text
                title
              }
              contactInfo {
                fieldGroupName
                section {
                  field
                  fieldGroupName
                }
              }
            }
          }
        }
      }
    }
  `)

  const { wp: { optionsPage: {options_page: { footerData: { contactInfo, social, textContent} } } } } = data;
  return (
    <footer
      style={{
        background: '#000',
        color: '#fff'
      }}
      className="footer"
    >
      <div className="footer__inner-wrapper" style={{display: "flex", justifyContent: "space-around"}}>
        <div className="footer__info-section">
          { contactInfo.map( item => {
            return item.section.map( (item, index) => {
              return <p key={index}>{item.field}</p>
            } )
          })}
        </div>
        <div className="footer_text-section">
          <h4 className="footer_text-section-title">{textContent.title}</h4>
          <p className="footer_text-section-text">{textContent.text}</p>
        </div>
        <div className="footer_text-section">
          {
            social.map( (networkInfo, index) => {
              const { socialNetwork : { title, url}} = networkInfo
              return <a href={url} target="_blank" key={index}>{title}</a>
            })
          }
        </div>
      </div>
      
    </footer>
  )
}

 

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
