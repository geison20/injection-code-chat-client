const gulp = require("gulp");
const uglify = require("gulp-uglify");
const pump = require("pump");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const s3 = require("gulp-s3-upload")({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    maxRetries: 5
});

gulp.task("js", function (cb) {
  pump([
        gulp.src("src/*.js"),
        babel({
            presets: ["env"]
        }),
        uglify(),
        rename({ suffix: ".min" }),
        gulp.dest("dist")
    ], cb );
});

gulp.task("publish", function (cb) {
    pump([
          gulp.src("dist/*.js"),
          s3({
              Bucket: "static.chat", //  Required
              ACL:    "public-read"       //  Needs to be user-defined
            })
      ], cb );
});

gulp.task("deploy", ["js", "publish"]);
