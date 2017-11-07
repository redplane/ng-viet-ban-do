/*****************************************************/
// Import path library.
var path = require('path');

// Import node dir.
var nodeDir = require('node-dir');

// Import common settings.
var common = require('../common');

/*****************************************************/

module.exports = {
    /*
    * Get list of source file which should be copied to ouput folder.
    * */
    get: function (root) {

        // Get list of source files.
        var files = nodeDir.files(common.paths.getPlugins(root), {sync: true});

        // Get plugin path.
        var pathPlugins = path.resolve(common.paths.getPlugins(root), 'js');

        // Filter files.
        files = files.filter(function (x) {
            // Ignore *.d.js files
            if (x.endsWith('.d.js') || !x.endsWith('.js') || x.endsWith('index.js'))
                return false;

            return true;
        });

        // Combine a list of source file which should be
        var sourceFiles = [path.resolve(pathPlugins, 'index.js')].concat(files);

        // Initiate configuration object.
        var options = {
            files: {},
            transform:{}
        };

        // File name construction.
        var minimizedFileName = common.getPluginName() + '.min.js';
        var unminimizedFileName = common.getPluginName() + '.js';

        // Update configuration properties.
        options.files[minimizedFileName] = sourceFiles;
        options.files[unminimizedFileName] = sourceFiles;

        // Update file transformation.
        options.transform[minimizedFileName] = function (code) {
            return require("uglify-js").minify(code).code
        };

        // Get all js files.
        return options;
    }
};

/*****************************************************/

return module.exports;

