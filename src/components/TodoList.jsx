import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/todo'

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    state = {
        newTodoText : ''
    }
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({newTodoText: ''})
    }
    render() {
        return (
            <>
                <ul>
                    {this.props.todo.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
                <input 
                value = {this.state.newTodoText}
                onChange ={(e) => this.setState({newTodoText: e.target.value})}
                type="text" />
                <button onClick={this.addNewTodo}>Novo todo</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})

const MapDispatchToProps = dispatch => 
    bindActionCreators(todoActions, dispatch);


export default connect(mapStateToProps, MapDispatchToProps)(TodoList);