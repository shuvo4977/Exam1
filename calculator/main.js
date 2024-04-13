let numberOne = document.querySelector(".number-1");
let numberTwo = document.querySelector(".number-2");
let operators = document.querySelector(".select-operators");
let calculate = document.querySelector(".calculate-btn");
let result = document.querySelector(".result");

calculate.addEventListener("click", () => {
  let selectedOperator = operators.value;
  let num1 = parseFloat(numberOne.value);
  let num2 = parseFloat(numberTwo.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please Enter Valid Numbers!";
    result.classList.remove("alert-success");
    result.classList.add("alert-danger");
  } else if (selectedOperator === "Select Operator") {
    result.textContent = "Please Select Operator!";
    result.classList.remove("alert-success");
    result.classList.add("alert-danger");
  } else {
    let operationResult;
    if (selectedOperator === "+") {
      operationResult = num1 + num2;
    } else if (selectedOperator === "-") {
      operationResult = num1 - num2;
    } else if (selectedOperator === "*") {
      operationResult = num1 * num2;
    } else if (selectedOperator === "/") {
      operationResult = num1 / num2;
    }
    result.textContent = "Result: " + operationResult;
    result.classList.remove("alert-danger");
    result.classList.add("alert-success");
  }

});
