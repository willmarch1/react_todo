import React from 'react'

export default function SingleToDo(props) {
  return (
    <tr>

      <td><input type="checkbox" className='checkbox' checked={props.todo.done}/></td>
      <td>{props.todo.name}</td>
      <td>{props.todo.category ? props.todo.category.catName : 'No category provided.'}</td>
    </tr>
  )
}