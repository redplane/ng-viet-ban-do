// Import path lib from node_modules.
var path = require('path');

// Paths list construction.
var paths = {
    sources: 'src',
    directives: 'src/app/directives',
    pluginDist: 'plugin-dist'
};

// Common setting.
var options = {
  pluginName: 'ng-viet-ban-do'
};

exports = module.exports = {

    paths: {
        /*
        * Get source code path.
        * */
        getSource: function(root){
            return path.resolve(root, paths.sources);
        },

        /*
        * Get folder which contains directives.
        * */
        getDirectives: function(root){
            return path.resolve(root, paths.directives);
        },

        /*
        * Get folder where plugin is contained.
        * */
        getPlugins: function(root){
            return path.resolve(root, paths.directives, options.pluginName)
        },

        /*
        * Get plugin distribution folder.
        * */
        getPluginDist: function(root){
            return path.resolve(root, paths.sources, paths.pluginDist)
        }
    },
    /*
        * Get plugin  name
        * */
    getPluginName: function(){
        return options.pluginName;
    }
};

return module.exports;