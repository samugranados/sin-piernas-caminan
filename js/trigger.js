window.onload=function(){

function hello() {
  console.log("Hello");
  window.setTimeout(hello, 5000);
}
hello();

}