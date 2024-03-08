import React from 'react'
import { useParams } from 'react-router-dom'

const AuthorProfile = () => {
  const {username} = useParams();

  const loadUser = async ()=> {
    // const r = await fetch (`https://api.unsplash.com/users/${username}&?client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
    const r = await fetch ("https://api.unsplash.com/photos/nMzbnMzMjYU")
    const data = await r.json();
    console.log(data);
  }

  loadUser();

  return (
    <div>AuthorProfile</div>
  )
}

export default AuthorProfile