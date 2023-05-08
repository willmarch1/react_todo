import React from 'react'
import ToDoForm from './ToDoForm'

export default function ResourceCreate(props) {
  return (
    <article className="createResource m-2 text-white justify-content-center">
        <ToDoForm setShowCreate={props.setShowCreate} getToDos={props.getToDos} />
    </article>
  )
}