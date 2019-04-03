module.exports=function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        karma: {
            unit: { configFile:'karma.conf.js' }
        },
        ts: {
            dev : {
                tsconfig: './tsconfig.json'
            }
        }
    });

    grunt.registerTask('default', ['ts:dev','karma']);
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-karma');
};