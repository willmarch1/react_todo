import React, { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import { useAuth } from '../../contexts/AuthContext'

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get(`http://todoapi.willmarch.net/api/categories`).then(response => {
        console.log(response)
        setCategories(response.data)
    })
}

useEffect(() => {
    getCategories()
}, []);

  return (
    <section className="categories">
        <article className="bg-info p-5">
            <h1 className="text-center">Categories Dashboard</h1>
        </article>

        <Container className='p-2'>
        <table className="table bg-info table-dark my-3">
            <thead className="table-secondary text-uppercase">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {categories.map(c => 
                    <SingleCategory key={c.categoryId} category={c} />    
                )}
            </tbody>
        </table>
        </Container>
    </section>
    
  )
}
