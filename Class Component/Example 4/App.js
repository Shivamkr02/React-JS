class App extends React.Component {
    render(){
        return <div><RandomNum/>
        <Gerretings/>
            </div>;
    }
}
let root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>);