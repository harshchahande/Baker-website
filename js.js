// ------Section 2--------
var a = document.getElementById("s2-img");
var b = document.getElementById("s2-img1");
var c = document.getElementById("s2-img2");
a.style.opacity = "0.5";
b.style.opacity = "0.5";
c.style.opacity = "0.5";

function fun() {
  a.style.opacity = "1";
  b.style.opacity = "1";
  c.style.opacity = "1";
}
function fun1() {
  a.style.opacity = "1";
  b.style.opacity = "1";
  c.style.opacity = "1";
}
function fun2() {
  a.style.opacity = "1";
  b.style.opacity = "1";
  c.style.opacity = "1";
}

// ------Section 3--------
var div = document.getElementById("s3-p");
var div1 = document.getElementById("s3-p1");
var div2 = document.getElementById("s3-p2");
var div3 = document.getElementById("s3-p3");

div.style.fontSize = "50px";
div1.style.fontSize = "50px";
div2.style.fontSize = "50px";
div3.style.fontSize = "50px";
i = 0;
function s3() {
  if (i < 52) {
    div.innerHTML = i;
    div.style.color = " #f1a809";
  }
  if (i < 180) {
    div1.innerHTML = i;
    div1.style.color = " #f1a809";
  }
  if (i < 200) {
    div2.innerHTML = i;
    div2.style.color = " #f1a809";
  }
  if (i < 500) {
    div3.innerHTML = i;
    div3.style.color = " #f1a809";
  }
  i++;
}
setInterval("s3()", 100);

// -----section 10, 11---

var s11 = document.getElementById("s11-s");

s11.style.display = "none";
function s10() {
  s11.style.display = "block";
}
