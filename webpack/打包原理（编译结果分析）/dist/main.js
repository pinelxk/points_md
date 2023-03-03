(function(modules){
    var installedModules = {};

    var module = {
        exports: {}
    };

    function __webpack__require(moduleId){
        if(installedModules[moduleId]){
            return installedModules[moduleId];
        }

        modules[moduleId](module, module.exports, __webpack__require);

        return module.exports;
    }

    return modules["./src/index.js"](module, module.exports, __webpack__require);

})({
    "./src/index.js": function(module, exports, __webpack__require){
        eval("console.log('run: index');\nconst {getNumber} = __webpack__require('./src/a.js');\nconsole.log(getNumber()); \n\n//# sourceURL=webpack:////./src/index.js");
    },
    "./src/a.js": function(module, exports, __webpack__require){
        eval("console.log('run: module a');\nfunction getNumber(){\n    return 1;\n}\nmodule.exports = {\n    getNumber\n}; \n\n//# sourceURL=webpack:////./src/a.js");
    },
});