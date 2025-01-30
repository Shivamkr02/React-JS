class App extends React.Component{
    render (){
        return (
            <Student
                name="Shivam"
                age={25}
                subjects={["Physics","Chemistry","Maths"]}
                marks={[50,60,70]}
                isPass={true}
                address={{city: "Bhopal", Pincode: 462016}}
                />
        );
    }
}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);