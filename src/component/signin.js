import React, { Component } from 'react';

import Strings from './../locales/en_US/translation';
import InputComponent from './input-component';
import { connect } from 'react-redux';

import * as actionsType from './../actions/actions';

class SignIn extends Component {
    //LifeCycle.
    //1
    constructor(props) {
        super(props);
        console.log("** SignIn inside constructor ** ");
        //hoisting.
        this.handleChange = this.handleChange.bind(this);
    }
    //2 : before render.
    componentWillMount() {
        console.log("** SignIn  inside componentWillMount ** ");
    }

    //3 : return JSX for view.
    render() {
        console.log("** SignIn inside render ** ");
         
        let { isDecrementPossible, counter } = this.props;
        return (
            <div className="sign-in">
                <span>{counter}</span>
                <br />
                <button onClick={this.props.incrementCounter}> Increment++ </button>
                <br />
                <button onClick={this.props.decrementCounter} disabled={isDecrementPossible}> Decrement-- </button>
                <br />
                <button onClick={this.props.addCounter}> ADD+5 </button>
                <br />
                <button onClick={this.props.subtractCounter} disabled={isDecrementPossible}> Subtract-5 </button>
                <br />

                <InputComponent label={Strings.first_name} type="text" name="" callback={this.handleChange} />

                <InputComponent label={Strings.last_name} type="text" name="" callback={this.handleChange} />

                <label className="content-label-style">{Strings.gender}<font color="red">*</font>
                </label>
                <input className="form-check-input" type="radio" name="gender" value='Male' onChange={this.handleChange} checked/>
                <label className="content-label-style">{Strings.male}</label>
                <input className="form-check-input" type="radio" name="gender" value='Female' onChange={this.handleChange} />
                <label className="content-label-style">{Strings.female}</label>
                <br/>
                
                <InputComponent label={Strings.contact_number} type="tel" name="" callback={this.handleChange} />

                <InputComponent label={Strings.email} type="email" name="" callback={this.handleChange} />

            </div>);
    }

    //4 : After component get render.
    componentDidMount() {
        console.log("** SignIn  inside componentDidMount ** ");
    }

    handleChange(event) {
        console.log("EVENT ::", event.target.value);
    }

}
let mapStateToProps = (state) => {
    return {
        counter : state.cacl.counter,
        isDecrementPossible : state.cacl.isDecrementPossible
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter : () => dispatch({ type : actionsType.INCR}),
        decrementCounter : () => dispatch({ type : actionsType.DECR}),
        addCounter : () => dispatch({ type: actionsType.ADD}),
        subtractCounter : () => dispatch({ type: actionsType.SUBTRACT})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);