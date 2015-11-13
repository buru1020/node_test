setTimeout(function() {
  console.log("...");
}, 500);
process.addListener("SIGINT", function() {
  console.log("BYE!!");
  process.exit(0);
});
console.log("START!!");
