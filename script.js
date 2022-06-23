let confirm = false;
function confirmFunc(text) {
  confirm = window.confirm(
    text + ". Click Okay to continue, click cancel to cancel"
  );
  if (confirm) {
    let fNum = window.prompt("Input the first number!");
    let operand = window.prompt("Input the operand/operator/sign");
    let sNum = window.prompt("Input the second number!");
    if (!fNum || !operand || !sNum) {
      confirmFunc("Invalid input, do you want to calculate again?");
    } else {
      if (isNaN(parseFloat(fNum)) || isNaN(parseFloat(sNum))) {
        console.log(Number(fNum), Number(sNum));
        confirmFunc("Invalid number, do you want to calculate again?");
      } else {
        if (
          operand !== "+" &&
          operand !== "-" &&
          operand !== "*" &&
          operand !== "/"
        ) {
          confirmFunc("Invalid operand, do you want to calculate again?");
        } else {
          let answer;
          let fiNum = Number(fNum);
          let seNum = Number(sNum);
          if (operand === "+") answer = fiNum + seNum;
          if (operand === "-") answer = fiNum - seNum;
          if (operand === "*") answer = fiNum * seNum;
          if (operand === "/") answer = fiNum / seNum;
          console.log(answer);
          confirmFunc("Your answer is " + answer);
        }
      }
    }
  } else {
    window.alert("Calculator canceled! Refresh the page to enable it again");
  }
}

confirmFunc("This is a simple calculator");
