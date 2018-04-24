var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');
var uglify = require('gulp-uglifyjs');
var sequence = require('run-sequence');

gulp.task('spec', function(){
  return gulp
    .src('spec/**/*_spec.js')
    .pipe(jasmine({
      integration: true,
      vendor: ['src/*.js']
      // keepRunner: 'spec'
    }));
});

gulp.task('minify', function(){
  return gulp
    .src('src/categorised-url.js')
    .pipe(uglify('dist/categorised-url.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('build', function(next){
  return sequence('spec', 'minify', next);
});

gulp.task('default', function(){
  return gulp
    .watch(['src/categorised-url.js', 'spec/**/*.js'], ['build']);
});
