import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthorGallery from './AuthorGallery';

const AuthorProfile = () => {
  const {username} = useParams();
  const [user, setUser] = useState('')

  const loadUser = async (username)=> {
    const r = await fetch (`https://api.unsplash.com/users/${username}?client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
    const data = await r.json();
    setUser(data);
  }

  useEffect(()=> {
    loadUser(username);
  },[username])
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="author-profile">
      <div className="profile-header">
        <img src={user.profile_image.large} alt={user.name} className="profile-image" />
        <div className="profile-details">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-bio">{user.bio}</p>
          <p className="profile-location">{user.location}</p>
          <div className="profile-stats">
            <span className="stat-item">{user.total_photos} Photos</span>
            <span className="stat-item">{user.total_likes} Likes</span>
            <span className="stat-item">{user.total_collections} Collections</span>
          </div>
          <div className="profile-interests">
            <span className="interest-item">Travel</span>
            <span className="interest-item">Saudi Arabia</span>
            <span className="interest-item">Photography</span>
            <span className="interest-item">Neom</span>
            <span className="interest-item">Nature</span>
          </div>
        </div>
      </div>
            <hr />
        <AuthorGallery photos={user.photos} />
    </div>
  );
};

export default AuthorProfile