import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      setIsAuthenticating(false);
      Alert.alert(
        "Authentication failed",
        "Could not create user Please check your input or try again later!"
      );
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
