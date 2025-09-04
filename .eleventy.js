const yaml = require("js-yaml");
const fs = require("fs");

const markdownIt = require("markdown-it");
const { RenderPlugin } = require("@11ty/eleventy");
const svgContents = require("eleventy-plugin-svg-contents");

// const drafts = require("./src/config/plugins/drafts");
// const posts = require('./src/config/collections/posts');

const today = require('./src/config/shortcodes/today');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  eleventyConfig.addPassthroughCopy({ "src/content/images": "content/images" });

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

	eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(svgContents);
	// eleventyConfig.addPlugin(drafts);

  // eleventyConfig.addCollection("posts", posts);

  eleventyConfig.addShortcode('today', today);

  // Markdown settings
  let markdownLibrary = markdownIt({
    html: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.setServerOptions({
    liveReload: true,
    watch: [
      "public/css/**/*.css"
    ]
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site",
      data: "data",
      includes: "includes",
      layouts: "includes/layouts"
    }
  };
};
