const path = require(`path`)

/**
 * SSR Pages & CPT
 * Function is async only because I am using await inside, data can be fetched using promises
 * @param {} param0 
 */
exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const singlePagesResult = await graphql(`
  {
    allWpPage {
      edges {
        node {
          id
          uri
          title
          language {
            locale
          }
          template {
            ... on WpDefaultTemplate {
              templateName
            }
            ... on WpPageBoardMembersTemplateTemplate {
              templateName
            }
            ... on WpPageContactTemplateTemplate {
              templateName
            }
            ... on WpPageCorporateGovernanceTemplateTemplate {
              templateName
            }
            ... on WpPageHistoryTemplateTemplate {
              templateName
            }
            ... on WpPageOurTeamTemplateTemplate {
              templateName
            }
            ... on WpPageReportTemplateTemplate {
              templateName
            }
            ... on WpPageSolutionsTemplateTemplate {
              templateName
            }
            ... on WpPageWorkTemplateTemplate {
              templateName
            }
          }
        }
      }
    }
  }`
  )

  

  const { allWpPage } = singlePagesResult.data



  //Create pages
  allWpPage.edges.forEach(page => {
    const { node } = page
    choseTemplateForPage(node)
  })

  function choseTemplateForPage(page) {
    if (page.template.templateName === 'Page Work Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/work-template.js'),
        context: {
          id: page.id,
          pageData: page
        }
      })
    } else if (page.template.templateName === 'Page Contact Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/contact-template.js'),
        context: {
          id: page.id,
        }
      })
    } else if (page.template.templateName === 'Page History Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/history-template.js'),
        context: {
          id: page.id,
        }
      })
    } else if (page.template.templateName === 'Page Solutions Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/solutions-template.js'),
        context: {
          id: page.id,
        }
      })
    } else if (page.template.templateName === 'Page Board Members Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/board-members-template.js'),
        context: {
          id: page.id,
        }
      })
    } else if (page.template.templateName === 'Page Corporate Governance Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/governance-template.js'),
        context: {
          id: page.id,
        }
      })
    } else if (page.template.templateName === 'Page Our Team Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/our-team-template.js'),
        context: {
          id: page.id,
        }
      })
    } else if (page.template.templateName === 'Page Report Template') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/report-template.js'),
        context: {
          id: page.id,
        }
      })
    } else {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/default-template.js'),
        context: {
          id: page.id,
        }
      })
    }
  }
}