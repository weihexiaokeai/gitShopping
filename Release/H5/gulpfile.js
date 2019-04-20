var gulp=require("gulp")
var webserver=require("gulp-webserver")

gulp.task("server",function(){
     return gulp.src("./src/")
     .pipe(webserver({
          open:true,
           port:8989,
           livereload:true,
           proxies:[
            {
                source:"/api/getShopping",target:"http://localhost:3000/api/getShopping"
            },
            {
               source:"/api/getShoppingOne",target:"http://localhost:3000/api/getShoppingOne"
           },
           {
               source:"/api/getTalk",target:"http://localhost:3000/api/getTalk"
           },
           {
               source:"/api/getInsert",target:"http://localhost:3000/api/getInsert"
           }
        ]
     }))
})