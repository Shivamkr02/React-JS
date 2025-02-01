class App extends React.Component{
    render (){
        return (
            <div>
                <h1>Courses Details</h1>
                <Course
                name="Java Full Stack" titles={["Core Java","JEE","SQL"]}/>
                <Course
                name="Front End Development" titles={["HTML","CSS","Java Script","React JS"]}/>
            </div>   
        );
    }
}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);