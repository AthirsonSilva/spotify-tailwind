import Head from 'next/head'
import './globals.css'

export const metadata = {
	title: 'Scottify',
	description: 'A Spotify clone built with Next.js and Tailwind CSS.',
	icons: [
		{
			url: '/favicon.png',
			sizes: '474x474',
			type: 'image/png',
		}
	]
}

export default function RootLayout({
	children,

}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="description" content={metadata.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{metadata.title}</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<body className='bg-zinc-900 text-zinc-50'>{children}</body>
		</html>
	)
}
