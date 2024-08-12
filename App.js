{/* <div id="parent">
            <div id="child">
                <h1>hello world from react </h1>
                <h2>this is h2 </h2>
            </div>
    </div> */}
    
    

const heading =React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello h1 from react"),
            React.createElement("h2",{},"hello h2 from react")
        ]
    )
);
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);



