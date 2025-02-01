class Student extends React.Component {
    render(){
        let {name,titles} = this.props;
        return (
            <div>
                <p>Course Name: {name}</p>
                <div>Titles
                    <ul>
                        <li>{titles.map((t)=><li>{t}</li>)}</li>
                    </ul>
                </div>
            </div>    
        );
    }
}
