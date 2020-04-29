module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Grunt task configuration will go here
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          './public/min-safe/mainJS/Amodule.js': ['./angular/module.js'],
          // CONTROLLERS START
          './public/min-safe/mainJS/controllerAdmin.js': ['./angular/controllers/Admin.js'],
          './public/min-safe/mainJS/controllerHospitalDetails.js': ['./angular/controllers/HospitalDetails.js'],
          './public/min-safe/mainJS/controllerHospitalDirectory.js': ['./angular/controllers/HospitalDirectory.js'],
          './public/min-safe/mainJS/controllerHospitalPortal.js': ['./angular/controllers/HospitalPortal.js'],
          './public/min-safe/mainJS/controllerIndex.js': ['./angular/controllers/Index.js'],
          './public/min-safe/mainJS/controllerNewsMedia.js': ['./angular/controllers/NewsMedia.js'],
          './public/min-safe/mainJS/controllerSelfTriage.js': ['./angular/controllers/SelfTriage.js'],
          './public/min-safe/mainJS/controllerTrackers.js': ['./angular/controllers/Trackers.js'],
          './public/min-safe/mainJS/controllerResources.js': ['./angular/controllers/Resources.js'],
          './public/min-safe/mainJS/controllerClinics.js': ['./angular/controllers/CitizenPatrol/Clinics.js'],
          './public/min-safe/mainJS/controllerGrocery.js': ['./angular/controllers/CitizenPatrol/Grocery.js'],
          './public/min-safe/mainJS/controllerPharmacies.js': ['./angular/controllers/CitizenPatrol/Pharmacies.js'],
          './public/min-safe/mainJS/controllerRoads.js': ['./angular/controllers/CitizenPatrol/Roads.js'],
          './public/min-safe/mainJS/controllerSubmitReport.js': ['./angular/controllers/CitizenPatrol/SubmitReport.js'],
          // CONTROLLERS END
          /* SEPARATOR COMMENT HERE */
          // FATORIES START
          './public/min-safe/mainJS/factoryHospitalPortalFactory.js': ['./angular/factories/HospitalPortalFactory.js'],
          './public/min-safe/mainJS/factorySessionFactory.js': ['./angular/factories/SessionFactory.js'],
          './public/min-safe/mainJS/factoryAdminFactory.js': ['./angular/factories/AdminFactory.js'],
          './public/min-safe/mainJS/factoryHospitalDirectoryFactory.js': ['./angular/factories/HospitalDirectoryFactory.js'],
          './public/min-safe/mainJS/factorySelfTriageFactory.js': ['./angular/factories/SelfTriageFactory.js'],
          './public/min-safe/mainJS/factoryCitizenPatrolFactory.js': ['./angular/factories/CitizenPatrolFactory.js'],
          // FACTORIES END
          /* SEPARATOR COMMENT HERE */
          // SERVICES START
          './public/min-safe/mainJS/servicePagerService.js': ['./angular/services/PagerService.js']
          // FACTORIES END
          // SERVICES END
        }
      }
    },
    concat: {
      js: { // Target
        src: ['./public/min-safe/app.js', './public/min-safe/mainJS/*.js'],
        dest: './public/min/app.js'
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: {
          drop_console: true,
          conditionals: true,
          booleans: true,
          sequences: true,
          join_vars: true,
          dead_code: true,
          ie8: true
        },
      },
      js: { // Target
        src: './public/min/*.js',
        dest: './public/minified/all.min.js'
      }
    }
  });

  // Load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-ng-annotate');

  // Register grunt default task
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
}