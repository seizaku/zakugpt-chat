'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const AppIcon = ({ className, size }) => {
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
			height={24}
			width={24}
			src={`/zakusei-${mode ? mode : 'light'}.svg`}
			className={cn('ease-in-out', className)}
		/>
	)
}

export default AppIcon
