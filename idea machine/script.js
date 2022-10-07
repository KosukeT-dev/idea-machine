var form = document.getElementById("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  var inputlist = document.getElementsByClassName("input");
  var arr = [];

  for (var i = 0; i < inputlist.length; i++) {
    var element = inputlist[i];
    arr.push(element.value);
  }

  for (var i = 0; i < arr.length; i++) {
    var index = Math.floor(Math.random() * arr.length);
    var cur = arr[i];
    arr[i] = arr[index];
    arr[index] = cur;
  }

  var better = "Shuffled: ";
  for (var i = 0; i < arr.length; i++) {
    better += arr[i];
    if (i + 1 != arr.length) {
      better += ""; //コンマ入れたかったら" "の間に入れる
    }
  }

  document.getElementById("answer").innerHTML = better;
});

var num = 1;

function addOption() {
  num++;

  var input = document.createElement("input");
  input.name = "input" + num;
  input.type = "text";
  input.id = "input" + num;
  input.className = "input";
  input.required = true;

  var label = document.createElement("label");
  label.htmlFor = "input" + num;
  label.innerText = "Word " + num + ": ";

  var div = document.createElement("div");
  div.appendChild(label);
  div.appendChild(input);

  document.getElementById("inputs").appendChild(div);
}