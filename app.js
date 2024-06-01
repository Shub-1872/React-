const parent = React.createElement(
    "div", 
    { id: "parent" },
    [React.createElement(
      "div", 
      { id: "child" }, 
      [React.createElement("h1", {}, "I am in the h1 tag"),
      React.createElement("h1", {}, "I am in the h1 tag")]
    ),
    React.createElement(
        "div", 
        { id: "child2" }, 
        [React.createElement("h1", {}, "I am in the h1 tag"),
        React.createElement("h1", {}, "I am in the h1 tag")]
      )]
  );

// to avoid the above complexities we will go for the JSX but does not mean that react can only be written in the form of the jsx  
  console.log(parent);
const heading1=React.createElement("h1",{id:"heading"},"hello this is js");
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);


// here what ever we have render will be replaced not appended
//root.render take the object and convert it to the tag
// here the h1 is not the tag infact it is the object
//in the case of the createElement we will see the blank space is the object where we will give the attribute to the tags
//to give more than one child we will pass the array of the element 