/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin( require('@11ty/eleventy').EleventyRenderPlugin )

	return {
		dir: {
			layouts: "_layouts"
		}
	}
}
