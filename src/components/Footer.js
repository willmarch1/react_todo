import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Logout from './Auth/Logout'


export default function Footer() {
  const { currentUser } = useAuth()
  
  return (
    <>
    {
      currentUser && 
        <Logout />
    }
    <footer className="text-center text-white bg-dark p-4">
        <strong>&copy; {new Date().getFullYear()} Will March. All Rights Reserved</strong>
    </footer>
    </>
  )
}