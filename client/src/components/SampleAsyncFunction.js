import React, { Fragment } from "react";

const SampleAsyncFunction = () => {
  //fetch returns a Promise object that is stored in the variable promise
  //this promise variable (or the returned Promise object) represents
  //an intermediate "pending" state
  let promise = fetch(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/320px-Cat_poster_1.jpg"
  );
  console.log("the initial promise is ", promise);

  promise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("the response object from fetch() is", response);
        return response.blob();
      }
    })
    .then((myBlob) => {
      console.log("myBlob is ", myBlob);
      let objectURL = URL.createObjectURL(myBlob);
      let image = document.createElement("img");
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch((e) => {
      console.log(
        "There has been a problem with your fetch operation: " + e.message
      );
    });

  return (
    <Fragment>
      <body>
        <p>This is my page</p>
      </body>
    </Fragment>
  );
};

export default SampleAsyncFunction;
