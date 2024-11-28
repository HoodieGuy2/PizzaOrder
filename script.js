document.getElementById("btn").addEventListener("click", getOrder);

function getOrder() {
  var top1 = document.getElementById("top1Inp").value;
  var top2 = document.getElementById("top2Inp").value;
  var size = document.getElementById("sizeInp").value;

  var output = `Your ${size} pizza with ${top1} and ${top2} will be ready soon`;
  document.getElementById("output").innerHTML = output;
}
