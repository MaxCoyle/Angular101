module.exports=function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        karma: {
            unit: { configFile:'karma.conf.js' }
        }
    });

    grunt.registerTask('default', ['karma']);

    grunt.loadNpmTasks('grunt-karma');
};