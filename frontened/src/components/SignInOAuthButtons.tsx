import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButtons = () => {
	const { signIn, isLoaded } = useSignIn();

	if (!isLoaded) {
		return null;
	}

// signed withgoogle to the account function
	const signInWithGoogle = () => {
		signIn.authenticateWithRedirect({
			strategy: "oauth_google", // give some credentials to the user to signedIn to his account 
			redirectUrl: "/sso-callback", // get the tokens to the auth pager (by google)
			redirectUrlComplete: "/auth-callback", //redirect to the authcallback page for signedIn
		});
	};
// intendation of the signedIn button (coming from the shadcn.ai)
	return (
		<Button onClick={signInWithGoogle} variant={"secondary"} className='w-full text-white border-zinc-200 h-11'>
			<img src='/google.png' alt='Google' className='size-5' />
			Continue with Google
		</Button>
	);
};
export default SignInOAuthButtons;
