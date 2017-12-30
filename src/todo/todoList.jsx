import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../template/iconButton'

import { markAsDone, MarkAsPending, remove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Button style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}/>
                    <Button style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.MarkAsPending(todo)}/>
                    <Button style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}/>
                </td>
            </tr>
        ))
    }


    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, MarkAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)