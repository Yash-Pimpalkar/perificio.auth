"use client"
import { login } from '@/actions/auth'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const GoogleSignInButton = () => {
  return (
    <div onClick={() => login("google")}>
        
        <div className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-sm">
          <FaGoogle className="text-white text-2xl" />
            GoogleSignInButton
        </div>
      </div>
  )
}

export default GoogleSignInButton