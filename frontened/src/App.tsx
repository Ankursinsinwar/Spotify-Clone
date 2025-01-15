import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

function App() {
  return (
    <>
        <header>
      <SignedOut>
        <SignInButton>
          <button >Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
