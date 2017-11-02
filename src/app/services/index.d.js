// Import services.
module.exports = function(ngModule) {
    require('./anchor.service')(ngModule);
    require('./showcase.service')(ngModule);
};