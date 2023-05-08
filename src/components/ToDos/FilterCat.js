import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FilterCat(props) {
    // We need to access and store categories from the API for this component to work
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.willmarch.net/api/categories`).then(response => {
            setCategories(response.data)
        })
    }, []);

  return (
    <div className='text-center mt-5'>
        <button onClick={() => props.setFilter(0)} className="btn btn-outline-info bg-dark m-1">
            All
        </button>
        {/* Below we map all our categories to a button that will filter resources for that category */}
        {categories.map(cat =>
            <button key={cat.categoryId} className="btn btn-outline-info bg-dark m-1"
            onClick={() => props.setFilter(+cat.categoryId)}>
                {cat.catName}
            </button>
        )}
    </div>
  )
}