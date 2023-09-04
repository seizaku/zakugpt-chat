import { Button } from '@/components/ui/button'
import { FiPlus } from 'react-icons/fi'
import { ChatHistory } from '@/components/layouts/chat-history'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@/components/user-button'
import { ModeToggle } from '@/components/mode-toggle'

const SideNav = () => {
	return (
		<aside className="fixed hidden h-screen max-h-screen w-72 flex-col rounded-r-xl border-r bg-background dark:bg-zinc-900 md:flex">
			<ul className="mb-2 p-2">
				<li className="flex gap-2 ">
					<Button variant="outline" className="w-full justify-start gap-2 py-6">
						<FiPlus />
						New Chat
					</Button>
					<ModeToggle />
				</li>
			</ul>
			<nav className="h-full">
				<ChatHistory />
			</nav>
			<footer className="p-2">
				<UserButton />
			</footer>
		</aside>
	)
}

export default SideNav
