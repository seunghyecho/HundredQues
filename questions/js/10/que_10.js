window.onload = function () {
  for (let i = 0; i < 10; i++) {
    for (let j = 9; j > i; j--) {
      document.write("&nbsp");
    }
    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }

  // Answer
  const n = prompt("숫자를 입력하세요.");
  let tree = "";

  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n - i; j++) {
      star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      star += "*";
    }
    tree += star + "\n";
  }

  console.log(tree);
};
