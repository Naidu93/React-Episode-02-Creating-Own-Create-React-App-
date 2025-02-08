/**
 * 
    const heading = document.createElement("h2");
    heading.innerHTML = `This is H2 from JavaScript`;
    document.body.append(heading);
 */
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This h1 from React (Child)"),
    React.createElement("h2", {}, "This h2 from React (Child)"),
  ]),
  React.createElement("div", { id: "child02" }, [
    React.createElement("h1", {}, "This h1 from React (Child02)"),
    React.createElement("h2", {}, "This h2 from React (Child02)"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// console.log(typeof root);
// console.log(heading);
