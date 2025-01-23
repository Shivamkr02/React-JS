class App extends React.Component {
    render(){
        return <Hello/>;
    }
}
let root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>);