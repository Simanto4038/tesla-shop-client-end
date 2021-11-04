import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signInWithEmailAndPassword , GithubAuthProvider,FacebookAuthProvider,signOut ,sendPasswordResetEmail  } from "firebase/auth";
import initializeAuthentation from "../components/FirebaseConfigaretion/FirebaseInitialization";


initializeAuthentation()
const UseFirebase = ()=>
{
  const [user,setUser]=useState({})
  const [email,setEmail]=useState('')
  const [passWord,setPassWord]=useState('')
  const [error,setError] = useState('');
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const GitProvider = new GithubAuthProvider();

   
    
/** Google Sign In **/

const GoogleSignInHandler = ()=>
{
  console.log('GOOGLE SIGN IN');
   return signInWithPopup(auth, GoogleProvider)
  
}
     


const GitSignInHandler =()=>{
  console.log("Git log In");
  
signInWithPopup(auth, GitProvider)
  .then((result) => {
 

    // The signed-in user info.
    const {displayName,email,photoURL} = result.user;
    const loggedinUserInfo={
      name:displayName,
      email:email,
      photo:photoURL
    }
    setUser(loggedinUserInfo);
  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode);
  });
}





/**Email & PW Handle Sign In */

const handleEmailchange =(e)=>
{  
setEmail(e.target.value);
}
const handlePasswordchange =(e)=>
{  
setPassWord(e.target.value);
}

const SigninWithEmail=(e)=>
{
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, passWord)
  .then((result) => {
    // Signed in 
    const {displayName,email,photoURL} = result.user;
    const loggedinUserInfo={
      name:displayName,
      email:email,
      photo:photoURL
    }
    setUser(loggedinUserInfo);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode);
  });

}


const SignoutHandler = ()=>
{
  signOut(auth).then(() => {
    setUser({});
    console.log('Sign-out successful');
  }).catch((error) => {
    // An error happened.
  });
}

const resetPasword=()=>
{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('A reset password link has been sent to your Email Address')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode );
  });
}

    useEffect( ()=>
    {
        onAuthStateChanged(auth, (user) => {
            if (user) {
           
              setUser(user)
              console.log(user);
            } else {
              // User is signed out
              // ...
            }
          });
    },[])
    return {user,
           email,
           passWord,
           error,
           setUser,
           setError,
            GoogleSignInHandler,
            SigninWithEmail,
            handleEmailchange,
            handlePasswordchange,
            GitSignInHandler,
            SignoutHandler,
            resetPasword,}
}

export default UseFirebase ;