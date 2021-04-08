module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "dist/grunt-main.css": "main.scss",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["sass"]);
};
