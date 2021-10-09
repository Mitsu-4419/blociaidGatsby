/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require("path")
// You can delete this file if you're not using it
exports.createPages = async ({graphql, actions, reporter}) =>{
    const {createPage} = actions
    const blogresult = await graphql(`
        query MyQuery {
            allContentfulBlogHinagataMarkdown {
                edges {
                    node {
                        slug
                    }
                }
            }
        }      
    `)
    if(blogresult.errors) {
		reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
		return
	}
    blogresult.data.allContentfulBlogHinagataMarkdown.edges.forEach(edge=>{
            createPage({
                path:`/blog/${edge.node.slug}/`,
                component:path.resolve('./src/templates/BlogDetail.tsx'),
                context:{
                    slug:edge.node.slug,
                    language:edge.node.node_locale
                }
        })
    })
}