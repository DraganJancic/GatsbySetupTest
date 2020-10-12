import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const NavMenu = ({ language }) => {

  const menuData = useStaticQuery(graphql`
    query NavMenus {
      allWpMenu {
        nodes {
          name
          menuItems {
            nodes {
              locations
              label
              path
            }
          }
        }
      }
    }
  `)

  const { allWpMenu: { nodes: menus } } = menuData
  const menu = language === 'is_IS' ? menus[0] : menus[1]

  return (
    <nav>
      {
        menu.menuItems.nodes.map((item, index) => {
          return (
            <Link to={item.path} key={index} style={{color: "#fff", padding: "5px"}}>{item.label}</Link>
          )
        })
      }
    </nav>
  )
}

NavMenu.propTypes = {
  siteTitle: PropTypes.string,
}

NavMenu.defaultProps = {
  siteTitle: ``,
}

export default NavMenu
