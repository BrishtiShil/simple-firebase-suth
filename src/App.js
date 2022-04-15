import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleGithubSignIn = () => {
    const gitProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <button onClick={handleGithubSignIn}>Github Sign In</button>
      <h2>Name: {user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
