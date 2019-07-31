//document.getElementById("square").style.height = "120px";

function myFunction() {
  let str_width = document.getElementById("width_square").value;
  let str_height = document.getElementById("height_square").value;
  console.log(str_width);
  console.log(str_height);
  document.getElementById("square").style.width = str_width + "px";
  document.getElementById("square").style.height = str_height + "px";
  let str = str_width * str_height;
  console.log("square " + str);
  let integerW = parseInt(str_width, 10);
  let integerH = parseInt(str_height, 10);
  str = integerW + integerW + integerH + integerH;
  console.log("perimeter " + str);
}

function myTrianFunction() {
  let str_width = document.getElementById("width_trian").value;
  let str_height = document.getElementById("height_trian").value;
  console.log(str_width);
  console.log(str_height);
  document.getElementById("triangle-up").style.width = str_width + "px";
  document.getElementById("triangle-up").style.height = str_height + "px";
}

function parallFunction() {
  let str_width = document.getElementById("width_parall").value;
  let str_height = document.getElementById("height_parall").value;
  console.log(str_width);
  console.log(str_height);
  document.getElementById("parallelogram").style.width = str_width + "px";
  document.getElementById("parallelogram").style.height = str_height + "px";
}