/**
 * 
 * <div id="parent">
 *   <h1 id="myh1" style="color: blue;">Hellow World from React</h1>
 * </div>
 */ 

 const main = React.createElement("div", {id: "parent"},
React.createElement("div", { id: "child" },
[React.createElement("h1", {},"Usman"),
  React.createElement("h2", {},"Naeem")]
));

    const root = ReactDOM.createRoot(document.getElementById("root"));
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root.render([main]);
    root2.render(main);
