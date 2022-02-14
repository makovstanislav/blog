exports.onCreateNode = async ({ node, actions, reporter, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type == 'MarkdownRemark') {
    const name = getNode(node.parent).name
    const dateRegex = /(\d+-\d+-\d+).+/
    const date = dateRegex.exec(name)[1]

    createNodeField({
      node,
      name: `date`,
      value: date
    })
  }
}
