// const heading=React.createElement("h1", {id:"heading"}, "hi reacct");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const parent=React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},React.createElement("h1",
{},"i am h1 tag")
)
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
