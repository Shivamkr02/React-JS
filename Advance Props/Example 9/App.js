class App extends React.Component{
    render(){
        return(
            <Greetings who="Shivam" from="Shristi"/>
        )
    }
}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);