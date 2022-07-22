/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true)
	eleventyConfig.addPlugin(require('@11ty/eleventy').EleventyRenderPlugin)
	eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-vite'), {
		viteOptions: {
			appType: 'custom',
			server: { middlewareMode: true },
		},
	})
	// eleventyConfig.addGlobalData(
	// 	'sanity_marx_get',
	// 	require('../../api/sanity-marx-get')(
	// 		`*[_type=='bookmark']|order(_createdAt desc)`,
	// 	),
	// )

	return {
		pathPrefix: 'marx/',
		dir: {
			includes: '../../components',
			layouts: '../../layouts',
		},
	}
}
