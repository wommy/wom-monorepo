/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin( require('@11ty/eleventy').EleventyRenderPlugin )

	// eleventyConfig.addGlobalData('sanity_marx_get', require('../../api/sanity-marx-get'))

	return {
		pathPrefix: 'marx/',
		dir: {
			includes: '../../components',
			layouts: '../../layouts',
		},
	}
}
