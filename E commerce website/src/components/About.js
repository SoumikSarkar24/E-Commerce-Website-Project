import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import {Component} from "react";

class About extends Component {
    constructor(){
        super();
        console.log('Parent ctr is called');
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.log('Parent mount is called');
        this.setState({
            count: this.state.count+1,
        })
    }

    render(){
        console.log('Parent render is called');
        
        return (
            <div>
                <ProfileClass name = "Keshav" address = "Pune" email = "keshav@gmail.com"/>
                <ProfileClass name = "Pranav" address = "Pune" email = "pranav@gmail.com"/>
            </div>
            
        )
    }
}
export default About;

/**
 * Parent ctr is called
 * Parent render is called
 * Child ctr is called
 * Child render method is called
 * Child ctr is called
 * Child render method is called
 * 
 * Child mount is called
 * Child mount is called
 * Parent mount is called
 */