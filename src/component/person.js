import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsType from './../actions/actions';
class Person extends Component {

    render() {
        return (
            <div >  
                <button value="ADD" onClick={() =>  this.props.addPerson("Kartik", 23) } >ADD person.</button>    
                <ul>
                    {this.props.persons.map( (p) => {
                        return (<li key={p.id} onClick={() =>  this.props.deletePerson(p.id) }>
                            <p>{p.name}</p>
                            <p>Age :{p.age}</p>
                        </li>);
                    })}
                </ul>              
            </div>);
    }
}
let mapStateToProps = (state) => {
    return {
        persons : state.person.persons
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPerson : (name, age) => dispatch({ type: actionsType.ADD_PERSON, name: name, age:age }),
        deletePerson : (deletedId) => dispatch({ type: actionsType.DELETE_PERSON, deletedId:deletedId })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Person);