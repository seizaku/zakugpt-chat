const Header = ({ children, className }) => {
	return (
		<header className="flex h-14 items-center justify-center border-b px-4 pt-2 md:pt-0">
			<h4 className="self-center text-sm font-semibold text-foreground">ZakuChat AI</h4>
		</header>
	)
}

export default Header
