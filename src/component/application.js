import React , { Component } from 'react';
import Welcome from './welcome';
import './../styles/application.css';
import SignIn from './signin';
import Person from './person';

class Application extends Component {
    //LifeCycle.
    //1
    constructor(props) {
        super(props);
        console.log("** Application inside constructor ** ");
        this.state = {
            name : "DUMMY NAME"
        }
    }
    //2 : before render.
    componentWillMount() {
        console.log("** Application  inside componentWillMount ** ");
    }

    //3 : return JSX for view.
    render() {
        console.log("** Application inside render ** ");
        return (
            <div className="App">      
              {/* <SignIn />              */}
              {/* <Welcome  name="Kartik Karekar"/> */}
              {/* <Welcome  name={this.state.name}/> */}
              <Person />
            </div>);
    }

    //4 : After component get render.
    componentDidMount() {
        this.setState({
            name : "Mr. Karan Shinde"
        });
        console.log("** Application  inside componentDidMount ** ");
    }

}

export default Application;