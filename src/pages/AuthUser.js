import {lazy} from 'react';
import {Suspense} from 'react';

const Authorize = async () => {
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
      isAuthed = true;
      return isAuthed;
    }
    if (data.status === 401) {
      isAuthed = false;
      return (window.location.href = '/Login');
    } else {
      isAuthed = false;
      return (window.location.href = '/Login');
    }
  } catch (error) {
    // Redirect to when server is not responding
    console.error('Error in Authorize:', error);
    return (window.location.href = '/Login');
  }
};

const AuthUser = Component => {
  const withAuth = () => {
    try {
      // Authorise user
      const AuthLoader = lazy(async () => {
        const Auth = await Authorize();
        if (Auth) {
          return {default: Component};
        }
        if (!Auth) {
          return (window.location.href = '/Login');
        }
      });
      return (
        <Suspense fallback="Loading...">
          <AuthLoader />
        </Suspense>
      );
    } catch (error) {
      console.error('Error in AuthUser:', error);
      return (window.location.href = '/Login');
    }
  };
  return withAuth;
};

export default AuthUser;
