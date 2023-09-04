import Container from '@/components/layouts/container'
import { UserProfile } from '@clerk/nextjs'

const AuthUserProfile = () => {
	return (
		<Container className="flex h-screen justify-center bg-zinc-900">
			<UserProfile />
		</Container>
	)
}

export default AuthUserProfile
