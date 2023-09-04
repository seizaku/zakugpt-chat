import { Separator } from '@/components/ui/separator'
import { FaAlignLeft, FaClipboard, FaEdit, FaDownload, FaImage } from 'react-icons/fa'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'

const MessageSection = ({ prompt, response, image }) => {
	const { toast } = useToast()
	const handleCopy = () => {
		navigator.clipboard.writeText(response)
		toast({
			className: 'dark:text-zinc-950 text-white bg-zinc-800 dark:bg-white',
			title: 'Text copied to clipboard.',
			description: 'Hoyy ma plagiarized ka! Paraphrase moyan.'
		})
	}

	return (
		<section className={`container mx-auto mt-6 w-full flex-1 gap-4 xl:w-3/6`}>
			{prompt.includes('image:') && (
				<>
					<h1 className="mb-6 text-3xl font-bold">{prompt.replace('image:', '')}</h1>
					<h5 className="mb-4 flex items-center gap-3 font-bold">
						<FaImage /> AI Image Result
					</h5>
					<article className="w-full">
						<div className="group relative">
							<img src={image} alt={prompt} className="w-fit rounded-md object-cover" />
							<div className="absolute inset-0 h-full w-full cursor-pointer opacity-0 transition-all ease-in-out"></div>
						</div>
					</article>
					<ul className="my-4 flex">
						<li>
							<Link
								href={image}
								className={`${buttonVariants({
									variant: 'outline'
								})} flex gap-2`}
								download={'hercai-v2.png'}
							>
								<FaDownload className="dark:text-zinc-600 " />
								Download Image
							</Link>
						</li>
					</ul>
				</>
			)}
			{!prompt.includes('image:') && (
				<>
					<h1 className="mb-6 text-3xl font-bold">{prompt}</h1>
					<h5 className="mb-4 flex items-center gap-3 font-bold">
						<FaAlignLeft /> Answer
					</h5>
					<article
						className="w-full whitespace-pre-line"
						dangerouslySetInnerHTML={{ __html: response }}
					></article>
					<ul className="my-4 flex">
						<li>
							<Button onClick={handleCopy} variant="ghost" size="icon">
								<FaClipboard className="dark:text-zinc-600 " />
							</Button>
						</li>
						<li>
							<Button variant="ghost" size="icon">
								<FaEdit className="dark:text-zinc-600 " />
							</Button>
						</li>
					</ul>
				</>
			)}
			<Separator />
		</section>
	)
}

export default MessageSection
