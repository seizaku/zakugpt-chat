import { Button } from '@/components/ui/button'
import { FiMenu, FiPlus } from 'react-icons/fi'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { ChatHistory } from '@/components/layouts/chat-history'
import { UserButton } from '@/components/user-button'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '@/components/mode-toggle'

export function SheetSideNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost">
					<FiMenu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-72 rounded-r-xl p-0 dark:bg-zinc-900">
				<SheetHeader className="p-2">
					<section className="flex w-full gap-2">
						<Button variant="outline" className="w-full justify-start gap-2 py-6">
							<FiPlus />
							New Chat
						</Button>
						<ModeToggle />
					</section>
				</SheetHeader>
				<nav className="h-full">
					<ChatHistory />
					<footer className="absolute bottom-0 w-full px-2 py-3">
						<UserButton />
					</footer>
				</nav>
			</SheetContent>
		</Sheet>
	)
}
