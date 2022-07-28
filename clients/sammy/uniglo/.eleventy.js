/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true)
	eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-vite'), {
		viteOptions: {
			appType: 'custom',
			server: { middlewareMode: true },
		},
	})
}
