const {src, dest, watch} = require("gulp");
const compileSass = require("gulp-sass");

compileSass.compiler = require("node-sass");

const bundleSass = () => {
    return src("./sass/**/*.sass")
        .pipe(compileSass().on("erroe", compileSass.logError))
        .pipe(dest("./css"))
};

const devWatch = () => {
    watch("./sass/**/*.sass", bundleSass);
};


exports.bundleSass = bundleSass;
exports.devWatch = devWatch;