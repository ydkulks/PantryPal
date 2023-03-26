import {useState} from 'react';

const Authorize = async () => {
  const {isAuthed, setIsAuth} = useState(null);
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('http://localhost:5000/api/protected', {
      headers: {
        Authorisation: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (data.status === 200) {
      setIsAuth(true);
      return isAuthed;
    }
  } catch (error) {
    // Redirect to when server is not responding
    console.error(error);
    window.location.href = '/Login';
  }
};

const AuthUser = Component => {
  const withAuth = () => {
    try {
      // Authorise user
      const Auth = Authorize();
      if (Auth === false) {
        window.location.href = '/Login';
      } else {
        return <Component />;
      }
    } catch (error) {
      console.error(error);
      window.location.href = '/Login';
    }
  };
  return withAuth;
};

export default AuthUser;
