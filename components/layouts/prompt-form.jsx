'use client'

import { Button } from '@/components/ui/button'
import { FiSend, FiLoader } from 'react-icons/fi'
import { useState } from 'react'
import { useChatStore, useChatState } from '@/lib/chat-store'
import axios from 'axios'
import { useRef } from 'react'

const PromptForm = () => {
	const { chat, sendPrompt } = useChatStore()
	const { isChatPending, setChatState } = useChatState()

	const [prompt, setPrompt] = useState('')
	const inputRef = useRef()
	const handleSubmit = async (e) => {
		e.preventDefault()
		inputRef.current.value = ''
		setChatState(true)
		await axios
			.post('/api/ask', {
				prompt,
				previousResponse: chat[chat.length - 1].response
			})
			.then((res) => {
				setChatState(false)
				sendPrompt({ prompt, response: res.data.message })
				setPrompt('')
			})
			.catch((error) => {
				console.log(error)
			})
		return
	}

	return (
		<>
			<section className="fixed bottom-0 h-16 w-full rounded-t-2xl border-t from-transparent via-transparent to-zinc-100 pt-6 dark:bg-zinc-900 dark:to-zinc-900 md:h-32 md:border-none md:bg-gradient-to-b md:dark:bg-transparent">
				<div className="flex h-full w-full items-center justify-center">
					<form
						onSubmit={handleSubmit}
						className="mb-1 flex h-16 w-96 px-2 md:mr-72 md:w-[50%] md:gap-0"
					>
						<textarea
							ref={inputRef}
							onChange={(e) => setPrompt(e.target.value)}
							className="h-11 w-full resize-none overflow-y-hidden rounded-full rounded-r-none border border-r-0 bg-background py-2.5 pl-6 text-sm outline-0 dark:bg-zinc-800 md:ml-12 md:h-14 md:py-4 md:text-[16px] md:font-normal"
							placeholder="Ask me anything.."
						></textarea>
						<Button
							variant="outline"
							className="h-11 w-16 rounded-full rounded-l-none border-l-0 bg-background pr-6 dark:bg-zinc-800 dark:hover:bg-zinc-700 md:mr-12 md:h-14 md:w-24"
						>
							{isChatPending && <FiLoader className="animate-spin text-foreground" />}
							{!isChatPending && <FiSend className="text-foreground" />}
						</Button>
					</form>
				</div>
			</section>
		</>
	)
}

export default PromptForm
