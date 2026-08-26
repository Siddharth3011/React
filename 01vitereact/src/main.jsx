import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp(){
    return(
    <div>
        <h1>Custom App!</h1>
    </div>
    )
}//this one work in the same way as it is written below.
//means it will form same tree like structure.

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to go to Google'
};//it will not run because here render expect some type of input but this reactElement contain props etc thing which this render don't want.

//but if we create:
const AnotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)//this will run like an object not like function so to run we have to write "AnotherElement" in render.

//now we will create our own function but using react:
const username = "Siddharth";
const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"}, //here you can define anything if you want then you can define h1..h6, paragraph etc. but you have to mention above that what type is written below anchor, header, para etc.
    'click me to visit google',
    username //it is evaluated expression. this is written in App.jsx in a different format.
)//this will run when you write ReactElement in render.

ReactDOM.createRoot(document.getElementById("root")).render(
    ReactElement
);