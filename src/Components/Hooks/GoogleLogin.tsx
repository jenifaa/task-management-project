import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import google from "../../assets/icons/google (1).png";

const GoogleLogin = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    console.error("AuthContext is null. Ensure AuthProvider wraps the app.");
    return null;
  }

  const handleGoogleSignIn = () => {
    authContext.signInWithGoogle().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center mt-2">
      <div className="py-2 rounded-full border-2 border-gray-300 w-[80%] lg:w-[60%]">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 px-4"
        >
          <img className="w-8" src={google} alt="Google icon" />
          SignIn/SignUp
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
