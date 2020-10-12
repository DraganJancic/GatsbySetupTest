import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavMenu from './NavMenu'

import './Header.scss'


const Header = ({ siteTitle, language, translations }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
    className="header"
  >
    <div className="header__logo">
      <h1 style={{ margin: 0 }}>
        <Link
          to={language === 'is_IS' ? '/' : '/en'}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="header__nav-wrapper">
      <NavMenu language={language}/>
      <Link 
        to={translations ? translations.uri : (language === 'is_IS' ? '/en' : '/') } 
        style={{color: "#fff"}}
      >
        {language === 'is_IS' ? 'en' : 'is'}
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
