'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const AppLogo = ({ className }) => {
	const { theme } = useTheme()
	const [mode, setThemeMode] = useState('light')
	useEffect(() => {
		const setMode = () => {
			setThemeMode(theme)
		}
		setMode()
	}, [theme])
	return (
		<Image
			alt="app-logo"
			height={48}
			width={48}
			src={`/zakusei-${mode ? mode : 'light'}.svg`}
			className={cn('ease-in-out', className)}
		/>
	)
}

export default AppLogo
