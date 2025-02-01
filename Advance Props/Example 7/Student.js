class Course extends React.Component {
    render(){
        let {name,age,subjects,marks} = this.props;
        let total=0;
        marks.forEach((m)=>{
            total+=m;
        });
        return (
            <div>
                <p>Name: {name}</p>
                <p>Age{age}</p>
                <div>Subjects:
                    <ul>
                        {subjects.map((s)=>(
                            <li>{s}</li>
                            ))}
                    </ul>
                </div>
                <div>Marks:
                    <ul>
                        {marks.map((m)=>(
                            <li>{m}</li>
                            ))}
                    </ul>
                </div>
                <p>Total: <strong>{total}</strong></p>
                <p>Result: <strong>{total >= 150 ? "Pass" : "Fail"}</strong></p>
            </div>    
        );
    }
}
