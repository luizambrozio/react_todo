import React, { Component } from 'react'
import PageHeader from '../template/pagaHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm/>
                <TodoList/>
            </div>
        )
    }
}