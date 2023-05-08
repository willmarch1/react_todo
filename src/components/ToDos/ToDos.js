import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import FilterCat from './FilterCat'
import SingleToDo from './SingleToDo'

export default function ToDos() {
    const [todos, setToDos] = useState([])

    const [filter, setFilter] = useState(0)


    const getToDos = () => {
        axios.get(`http://todoapi.willmarch.net/api/todos`).then(response => {
            console.log(response.data)
            setToDos(response.data)
        })
    }
    
    useEffect(() => {
        getToDos()
    }, []);
    
  return (
    <section className="todos">
        <article className="bg-info p-5">
            <h1 className="text-center">ToDos Dashboard</h1>
        </article>
        <FilterCat setFilter={setFilter} />
        <Container>
            <table className="table bg-info table-dark my-3">
                <thead className="table-secondary text-uppercase">
                    <tr>
                        <th>Done</th>
                        <th>Task</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                      {filter === 0 ? todos.map(x => 
                    <SingleToDo key={x.todoId} todo={x} />
                ) :
                todos.filter(x => x.categoryId === filter).map(x => 
                    <SingleToDo key={x.todoId} todo={x} />  
                )}
                
                </tbody>
            </table> 
            {filter !== 0 && todos.filter(x => x.categoryId === filter).length === 0 &&
                    <h2 className="alert alert-warning text-dark">
                        No results for this category
                    </h2>
                }   
            
        </Container>
    </section>
  )
}

