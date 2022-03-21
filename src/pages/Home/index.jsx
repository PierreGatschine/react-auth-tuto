import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'


export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? "Welcome buddy !" : "Please sign up or sign in"}
      </h1>

    </div>
  )
}
