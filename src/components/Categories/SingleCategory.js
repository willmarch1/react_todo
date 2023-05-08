import React, {useState} from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import CatEdit from './CatEdit'

export default function SingleCategory(props) {
  const { currentUser } = useAuth()
  const [showEdit, setShowEdit] = useState(false);
  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.category.catName}? This action cannot be undone.`)){
      axios.delete(`http://todoapi.willmarch.net/api/categories/${id}`).then(() => props.getCategories())
    }
  }

  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{!props.category.catDesc ? 'No description provided' : props.category.catDesc}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
          <td>
            <button className="fs-5 rounded" id='editLink' onClick={() => setShowEdit(true)}>
              <FaEdit />
            </button>
            &emsp;
            <button className="fs-5 rounded" id='deleteLink' onClick={() => deleteCat(props.category.categoryId)}>
              <FaTrashAlt />
            </button>
            {showEdit &&
              <CatEdit
                category={props.category}
                getCategories={props.getCategories}
                showEdit={showEdit}
                setShowEdit={setShowEdit} />
            }
          </td>
        }
    </tr>
  )
}
