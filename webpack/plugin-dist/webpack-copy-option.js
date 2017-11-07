// Libraries import.
var path = require('path');
var common = require('../common');

/*
* Module configuration
* */
exports = module.exports = {

	/*
	* Get configuration.
	* */
	get: function(root){
		return [
            {
                from: path.resolve(common.paths.getPlugins(root), 'js', '**/*.js'),
                to: path.resolve(common.paths.getPluginDist(root), 'js'),
                flatten: true
            },
            {
                from: path.resolve(common.paths.getPlugins(root), 'css/*.css'),
                to: path.resolve(common.paths.getPluginDist(root), 'css'),
                flatten: true
            },
            {
                from: path.resolve(root, 'README.md'),
                to: common.paths.getPluginDist(root)
            }, {
                from: path.resolve(root, 'package.json'),
                to: common.paths.getPluginDist(root)
            }
		]
	}
};

// Export module configuration.
return module.exports;