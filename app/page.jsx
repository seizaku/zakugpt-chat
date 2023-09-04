import Container from '@/components/layouts/container'
import SideNav from '@/components/layouts/side-nav'
import TopNav from '@/components/layouts/top-nav'
import Header from '@/components/chat-header'
import MessageLayout from '@/components/layouts/message-layout'
import PromptForm from '@/components/layouts/prompt-form'

const Home = () => {
	return (
		<Container className="flex">
			<SideNav />
			<TopNav />
			<Container className="mt-12 h-screen w-full bg-background md:ml-72 md:mt-auto">
				<Header />
				<MessageLayout />
				<PromptForm />
			</Container>
		</Container>
	)
}

export default Home
