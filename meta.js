module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name"
    },
    description: {
      type: "string",
      message: "Project description",
      default: "A Vue.js project"
    },
    author: {
      type: "string",
      message: "Author"
    }
  },
  skipInterpolation: '*.vue'
}
