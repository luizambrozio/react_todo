import React from 'react'

import Button from '../template/iconButton'

export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <Button style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}/>
                </td>
            </tr>
        ))
    }


    return(
        <table>
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