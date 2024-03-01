export default function FrontLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <main className='flex-frow container mx-auto px-4'>{children}</main>
}
