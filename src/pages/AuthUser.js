//import {useState} from 'react';

const Authorize = async () => {
  //const {isAuthed, setIsAuth} = useState(null);
  var isAuthed = false;
  const token = localStorage.getItem('token');
  try {
    const res = await fetch('http://localhost:5000/api/protected', {
      headers: {
        Authorisation: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    //console.log(data.status);
    if (data.status === 200) {
      //setIsAuth(true);
      isAuthed = true;
      return isAuthed;
    }else{
      //setIsAuth(false);
      isAuthed = false;
      return isAuthed;
    }
  } catch (error) {
    // Redirect to when server is not responding
    console.error('Error in Authorize:',error);
    return window.location.href = '/Login';
  }
};

const AuthUser = Component => {
  const withAuth = () => {
    try {
      // Authorise user
      const Auth = Authorize();
      if (Auth === false) {
        return window.location.href = '/Login';
      } else {
        return <Component />;
      }
    } catch (error) {
      console.error('Error in AuthUser:',error);
      return window.location.href = '/Login';
    }
  };
  return withAuth;
};

export default AuthUser;
