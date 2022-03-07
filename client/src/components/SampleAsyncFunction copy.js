import React, { Fragment } from "react";

const SampleAsyncFunction = () => {
  function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
  return (
    <Fragment>
      <h2>JavaScript Callbacks</h2>
      <p>Do a calculation and then display the result.</p>
      <p id="demo"></p>
    </Fragment>
  );
};

export default SampleAsyncFunction;
