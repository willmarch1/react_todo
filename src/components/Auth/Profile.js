import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Auth.css'

export default function Profile() {
    const { currentUser } = useAuth()

  return (
    <span className='profile p-2'>
        Hello, {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]}!
        <img src={currentUser.photoURL} alt={`${currentUser.displayName} Github avatar`} />
    </span>
  )
}