import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  let navigate = useNavigate();
  return <div>THIS IS PROFILE
    <button onClick={()=>{
    navigate('/about');
  }}>Back to About</button>
  </div>;
}

export default Profile;
