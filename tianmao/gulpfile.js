const gulp =require("gulp")
// const { pipe } = require("stdout-stream")
// const { func } = require("assert-plus")
  //1.拷贝html文件
gulp.task("htmlcopy",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})
//2、图片处理
gulp.task("images",function(){
    return gulp.src("images/*.{jpg,png,gif}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

// 3、数据处理
gulp.task("data",function(){
      return gulp.src(["*.json","!package.json"])
      .pipe(gulp.dest("dist/data"))
      .pipe(connect.reload());
})
//4、打包Php
gulp.task("php",function(){
    return gulp.src("*.php")
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload());
})
//  swiper
gulp.task("swiper",function(){
    return gulp.src("swiper/**/*")
    .pipe(gulp.dest("dist/swiper/"))
})

// 阿里矢量库
gulp.task("icont",function(){
    return gulp.src("font/**/*")
    .pipe(gulp.dest("dist/font/"))
})
//5、处理JS
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
//6、一键执行
gulp.task("build",["htmlcopy","images","data","php","scripts"],function(){
    console.log("处理成功")
})

// 处理scss文件
   const sass= require("gulp-sass")
//    const minify= require("gulp-minify-css")
//     const rename = require("gulp-rename")
    gulp.task("sass",function(){
        return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
        // .pipe(minify())
        // .pipe(rename("index.min.css"))
        // .pipe(gulp.dest("dist/css"))
    })
    gulp.task("watch",function(){
        gulp.watch("*.html",["htmlcopy"]);
        gulp.watch("images/*.{jpg,png,gif}",["images"]);
        gulp.watch(["*.json","!package.json"],["data"]);
        gulp.watch("*.php",["php"]);
        gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
        gulp.watch("sass/*.scss",["sass"]);
    })
    const connect =require("gulp-connect")
    gulp.task("server",function(){
        connect.server({
            root:"dist",
            port:8888,
            livereload: true,
        })
    })
    gulp.task("default",["server","watch"]);