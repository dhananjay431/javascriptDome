var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  scripts: [
"./www/main/jquery.min.js",
"./www/main/bootstrap.min",
"./www/main/jquery.dataTables.js",
"./www/main/angular.min.js",
"./www/main/angular-datatables.min.js",
"./www/main/angular-datatables.bootstrap.min.js",
"./www/main/dataTables.tableTools.js",
"./www/main/angular-datatables.tabletools.min.js",
"./www/main/angular-resource.min.js",
"./www/main/ui-bootstrap-tpls.min.js",
"./www/main/angular-sanitize.min.js",
"./www/main/angular-animate.min.js",
"./www/main/angular-aria.min.js",
"./www/main/angular-messages.min.js",
"./www/main/angular-material.min.js",
"./www/main/angular-ui-router.min.js",
"./www/main/jquery-ui.js",
"./www/main/lodash.min.js"
]};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scriptsmain']);
});


gulp.task('scriptsmain', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./www/vendor/'));
});


gulp.task('default', ['watch','scriptsmain']);

/*
"/www/js/jquery.min.js",
"/www/js/jquery.dataTables.js",
"/www/js/angular.min.js",
"/www/js/angular-datatables.min.js",
"/www/js/angular-datatables.bootstrap.min.js",
"/www/js/dataTables.tableTools.js",
"/www/js/angular-datatables.tabletools.min.js",
"/www/js/angular-resource.min.js",
"/www/js/ui-bootstrap-tpls.min.js",
"/www/js/angular-sanitize.min.js",
"/www/js/angular-animate.min.js",
"/www/js/angular-aria.min.js",
"/www/js/angular-messages.min.js",
"/www/js/angular-material.min.js",
"/www/js/angular-ui-router.min.js",
*/