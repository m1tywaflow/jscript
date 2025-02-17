function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;


const {task, series } = require("gulp");

task('test', (done) => {
    console.log('hello test');
    done();
});
exports.test = task('test');
exports.default = series(task);