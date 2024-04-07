import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userInfo = await signInWithPopup(auth, provider);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: userInfo?.user.uid,
          email: userInfo?.user.email,
          displayName: userInfo?.user.displayName,
          photoURL: userInfo?.user.photoURL,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button onClick={handleSignInWithGoogle}>Sign in</button>
    </>
  );
}

export default App;
