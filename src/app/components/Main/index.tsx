import { ArrowDown, ChevronLeft, ChevronRight, Play, Plus } from 'lucide-react'
import Image from 'next/image'
import './main.css'

export function Main() {
	const [albumCovers, setAlbumCovers] = Array([
		'/rodeo.jpg',
		'/astroworld.jpg',
		'/birds-in-the-trap.jpg',
		'/days-before-rodeo.jpg',
		'/huncho-jack.jpg',
		'/jackboys.jpg',
		'/owl-pharaoh.jpg',
		'/travis-scott.jpg',
		'/travis-scott-mix.jpg',
		'/travis-scott-radio.jpg',
		'/this-is-travis-scott.jpg',
		'/highest-in-the-room.jpg',
		'/mamacita.jpg',
	])

	return (
		<main className="flex-1 p-6 max-h-screen overflow-y-auto">
			<div className="flex justify-between">
				<div className="flex item-scenter gap-4">
					<button className="rounded-full h-10 bg-black/40 px-1">
						<ChevronLeft size={28} className="pr-1" />
					</button>
					<button className="rounded-full h-10 bg-black/40 px-1">
						<ChevronRight size={28} className="pl-1" />
					</button>
				</div>
				<div className="flex items-center gap-4">
					<button className="h-12 flex items-center justify-center pl-1 rounded-full bg-zinc-950">
						<Image src="/profile.jpg" alt="Album cover" className="rounded-full ml-1" width={34} height={34} />
						<strong className="text-xl ml-3 mr-10 text-white">
							Athirson Silva
						</strong>
						<ArrowDown size={24} className="mr-3 text-zinc-50" />
					</button>
				</div>
			</div>
			<h1 className="font-semibold text-3xl mt-8">Good Evening</h1>
			<div className="mt-6 grid grid-cols-3 gap-4">
				<a className="flex items-center gap-4 bg-white/5 group rounded-md hover:bg-white/10 transition-colors">
					<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md p-1" width={104} height={104} />
					<strong className="text-xl overflow-x-auto truncate">
						Rap Caviar
					</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a className="flex items-center gap-4 bg-white/10 group rounded-md hover:bg-white/20 transition-colors">
					<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md p-1" width={104} height={104} />
					<strong className="text-xl overflow-x-auto truncate">
						Daily Mix 1
					</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a className="flex items-center gap-4 bg-white/10 group rounded-md hover:bg-white/20 transition-colors">
					<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md p-1" width={104} height={104} />
					<strong className="text-xl overflow-x-auto truncate">
						DOPE.
					</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a className="flex items-center gap-4 bg-white/10 group rounded-md hover:bg-white/20 transition-colors">
					<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md p-1" width={104} height={104} />
					<strong className="text-xl overflow-x-auto truncate">
						Release Radar
					</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a className="flex items-center gap-4 bg-white/10 group rounded-md hover:bg-white/20 transition-colors">
					<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md p-1" width={104} height={104} />
					<strong className="text-xl overflow-x-auto truncate">
						Travis Scott
					</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a className="flex items-center gap-4 bg-white/10 group rounded-md hover:bg-white/20 transition-colors">
					<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md p-1" width={104} height={104} />
					<strong className="text-xl overflow-x-auto truncate">
						I Love My 90's
					</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
			</div>
			<section className="mb-24">
				<h2 className="font-semibold text-2xl mt-10">Made for Athirson Silva</h2>
				<div className="grid grid-cols-8 gap-4 mt-4">
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Rap Caviar
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Lil Uzi Vert, Future, Drake
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Rodeo
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Travis Scott
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							I Love My 90's
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							2Pac, Snoop Dogg, Dr. Dre
						</span>
					</a>
					<a className="bg-white/5 p-2 overflow-x-hidden rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Rap Hits (2010's)
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Lil Baby, Migos, Travis Scott
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold">
							Future Radio Mix
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Future
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							To Pimp A Butterfly
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Kendrick Lamar
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							2014 Forest Hills Drive
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							J. Cole
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Views
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Drake
						</span>
					</a>
				</div>
				<h2 className="font-semibold text-2xl mt-10">Based on your recent listening</h2>
				<div className="grid grid-cols-8 gap-4 mt-4">
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Hip Hop Controller
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Pass The Aux - Hip Hop
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Power Workout
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							For whatever activity you do to get your heart pumping
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Locked In
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Fourth Quarter Comebacks, Game Winning Shots, and Clutch Plays
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Daily Mix 4
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Lil Baby, Migos, Travis Scott and more
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Travis Scott Mix
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Spotify
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Birds in the trap sing McKnight
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Travis Scott
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							AstroWorld
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Travis Scott
						</span>
					</a>
					<a className="bg-white/5 p-2 rounded-md flex flex-col">
						<Image src={albumCovers[Math.floor(Math.random() * albumCovers.length)]} alt="Album cover" className="rounded-md w-full" width={248} height={248} />
						<strong className="text-md mt-2 mb-2 pl-2 font-bold overflow-x-auto truncate">
							Rodeo
						</strong>
						<span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
							Travis Scott
						</span>
					</a>
				</div>
				<div className="flex items-center justify-center mt-10 mb-10">
					<button className="bg-white/10 hover:bg-white/20 transition-colors rounded-md p-2 flex items-center justify-center gap-2">
						<Plus />
						<span className="text-lg overflow-x-auto truncate font-medium">
							See More
						</span>
					</button>
				</div>
			</section>
		</main>
	)
}