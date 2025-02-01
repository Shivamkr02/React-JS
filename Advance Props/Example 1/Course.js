class Course extends React.Component {
    render(){
        let {name,titles} = this.props;
        let arr=[];
        titles.forEach((t) => {
            arr.push(<li>{t}</li>); 
        });
        return (
            <div>
                <p>Course Name: {name}</p>
                <div>Titles
                    <ul>
                        <li>{arr}</li>
                    </ul>
                </div>
            </div>    
        );
    }
}
