import { Button } from '@/components/ui/button'
import { useSignIn, useSignUp } from '@clerk/nextjs'
import { BiLogoGoogle, BiLogoGithub } from 'react-icons/bi'

const AuthProviderButtons = ({ children, method }) => {
	const { isLoaded, signIn } = useSignIn()
	const { signUp } = useSignUp()

	const OAuthProvider = (e, method, strategy) => {
		if (!isLoaded) return
		const OAuth = (method, strategy) => {
			switch (method) {
				case 'sign-in':
					signIn.authenticateWithRedirect({
						strategy,
						redirectUrl: '/sso-callback',
						redirectUrlComplete: '/'
					})
					break
				case 'sign-up':
					signUp.authenticateWithRedirect({
						strategy,
						redirectUrl: '/sso-callback',
						redirectUrlComplete: '/'
					})
					break
			}
		}
		OAuth(method, strategy)
	}
	return (
		<section className="grid w-full grid-cols-1 gap-2">
			<Button
				variant="ghost"
				className="flex w-full justify-start gap-4 py-6 text-xs sm:text-sm"
				onClick={(e) => OAuthProvider(e, method, 'oauth_google')}
			>
				<BiLogoGoogle />
				Continue with Google
			</Button>
			<Button
				variant="ghost"
				className="flex w-full justify-start gap-4 py-6 text-xs sm:text-sm"
				onClick={(e) => OAuthProvider(e, method, 'oauth_github')}
			>
				<BiLogoGithub />
				Continue with Github
			</Button>
		</section>
	)
}

export default AuthProviderButtons
