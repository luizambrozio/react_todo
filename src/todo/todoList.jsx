import React from 'react'

import Button from '../template/iconButton'

export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Button style='success' icon='check'
                        onClick={() => props.handleMarkAsDone(todo)}/>
                    <Button style='warning' icon='undo'
                        onClick={() => props.handleMarkAsPending(todo)}/>
                    <Button style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}/>
                </td>
            </tr>
        ))
    }


    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}