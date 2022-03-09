import React, { Fragment, useState, useEffect } from "react";

const SampleAsyncFunction = () => {
  const [result, getResult] = useState("");

  const runThisFunction = () => {
    const fetchPromise = fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    //fetchPromise is in pending status right now
    //console.log(fetchPromise);

    //when the fetch operation succeeds, the promise will call
    //the handler function(response)=>{} (aka the callback block).
    //important: the promise passes the Response object (the server's response)
    //to the handler function

    // fetchPromise.then((response) => {
    //   console.log(
    //     `Received response: status: ${response.status}, statusText ${response.statusText}`
    //   );

    //   const jsonPromise = response.json();
    //   jsonPromise.then((json) => {
    //     console.log(json[0].name);
    //     getResult(json[0].name);
    //   });
    // });

    fetchPromise
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        getResult(json[10000].name);
      })
      .catch((error) => {
        console.error(`could not get products: ${error}`);
      });
  };

  useEffect(() => {
    //console.log("useEffect called");
    runThisFunction();
  }, []); //the [] ensures that there is only one request

  // console.log("Started request...");

  return (
    <Fragment>
      <body>
        <p>This is my page {result}</p>
      </body>
    </Fragment>
  );
};

export default SampleAsyncFunction;
