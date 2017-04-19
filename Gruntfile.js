module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1440,
            suffix: '_large_2x',
            quality: 50
          },
          {
            width: 720,
            suffix: '_large_1x',
            quality: 60
          },
          {
            width: 720,
            suffix: '_small_2x',
            quality: 75
          },
          {
            width: 360,
            suffix: '_small_1x',
            quality: 75
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images']
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
