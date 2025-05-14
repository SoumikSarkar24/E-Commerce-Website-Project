import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2: 0,
        }
        console.log('Child ctr is called');
        
    }

    // why we use component did mount
    // api call
    componentDidMount(){
        console.log(`Child mount is called`);
        
    }
    render(){
        console.log('Child render method is called');
        
        return (
            <div style ={{
                "border": "1px solid black"
            }}>
                <h1>Profile class based Component</h1>
                <h3>Name: {this.props.name}</h3>
                <h3>Address: {this.props.address}</h3>
                <h3>Email: {this.props.email}</h3>
                <h1>count2 - {this.state.count2}</h1>
                <button onClick={()=> {
                    // You can't update state variable directly
                    this.setState({
                        count2:this.state.count2+1,
                        count2:this.state.count+1,
                    });
                }}>Increment</button>
            </div>
        )
    }
};
export default ProfileClass;
