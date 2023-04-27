import React from 'react'
import "./loginpage.css"

const TopBar = () => {
  return (
    <div className='topbar'>
        <div className='topDetail'>
            <h2 className='logoName'>Game Project</h2>
            <button className='signUpBtn'><a href='/signUp'> Sign-Up</a></button>
        </div>
    </div>
  )
}

export default TopBar