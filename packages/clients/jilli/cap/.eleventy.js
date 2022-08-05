module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-vite'), {
		viteOptions: {
			appType: 'custom',
			server: { middlewareMode: true },
		},
	})

}
