var spawn = require("child_process").spawn;
var ls = spawn("ls", ["-ls", "./"]);
ls.stdout.addListener("data", function(data) {
      console.log(data);
});
