setInterval(function() {
      console.log("hello");
}, 500);
process.addListener("SIGINT", function() {
      console.log("\r\ngood-bye");
        process.exit(0);
});
console.log('START!!');
