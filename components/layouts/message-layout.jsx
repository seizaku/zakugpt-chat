'use client'
import Container from '@/components/layouts/container'
import MessageSection from '@/components/message-section'
import { useChatStore } from '@/lib/chat-store'
import { Skeleton } from '@/components/ui/skeleton'
import { useChatState } from '@/lib/chat-store'
import { useEffect, useRef } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const MessageLayout = () => {
	const { chat } = useChatStore()
	const { isChatPending } = useChatState()
	const skeletonRef = useRef()

	useEffect(() => {
		const scrollToSkeleton = () => {
			skeletonRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
		scrollToSkeleton()
	}, [isChatPending])
	return (
		<Container key="container-1" className="grid grid-cols-1 justify-self-center pb-24 pt-6">
			{chat.map(({ prompt, response, image }, index) => {
				return (
					<>
						{prompt.includes('image:') ? (
							<MessageSection key={index} prompt={prompt} image={response} />
						) : (
							<MessageSection key={index} prompt={prompt} response={response} />
						)}
					</>
				)
			})}
			{isChatPending && (
				<>
					<section
						key={'skeleton'}
						ref={skeletonRef}
						className="container mx-auto mt-6 w-full flex-1 gap-4 xl:w-3/6"
					>
						<Skeleton className="h-24 w-full" />
						<Skeleton className="mt-8 h-6 w-40" />
						<Skeleton className="mt-4 h-6 w-full" />
						<Skeleton className="my-4 h-6 w-[80%]" />
						<Skeleton className="my-4 h-6 w-[90%]" />

						<Skeleton className="mt-8 h-6 w-40" />
						<Skeleton className="mt-4 h-6 w-full" />
						<Skeleton className="my-4 h-6 w-[80%]" />
						<Skeleton className="my-4 h-6 w-[90%]" />
					</section>
				</>
			)}
		</Container>
	)
}

export default MessageLayout
