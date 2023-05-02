import { Heart, HomeIcon, Library, Plus, Search } from "lucide-react";

export function Sidebar() {
	return (
		<aside className="w-64 bg-black p-6">
			<div className="flex items-center gap-3 ml-4">
				<div className="w-4 h-4 bg-red-500 rounded-full"></div>
				<div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
				<div className="w-4 h-4 bg-green-500 rounded-full"></div>
			</div>
			<nav className="space-y-5 mt-7">
				<a href="" className="bg-zinc-200/40 rounded-md p-2 flex items-center gap-4 text-sm font-semibold text-zinc-200">
					<HomeIcon />
					Home
				</ a>
				<a href="" className="flex items-center gap-4 px-1 text-sm font-semibold text-zinc-200">
					<Search />
					Search
				</a>
				<a href="" className="flex items-center gap-4 px-1 text-sm font-semibold text-zinc-200">
					<Library />
					Your library
				</a>
			</nav>
			<nav className="mt-16 space-y-5">
				<a href="" className="flex items-center gap-4 text-sm font-semibold text-zinc-200">
					<div className="bg-zinc-200/80 rounded-md">
						<Plus size={32} className="text-zinc-950 p-1" />
					</div>
					<span className="font-extrabold text-md">
						Create Playlist
					</span>
				</a>
				<a href="" className="flex items-center gap-4 text-sm font-semibold text-zinc-200">
					<div className="bg-violet-500 rounded-md">
						<Heart size={32} className="text-zinc-950 p-1 pt-2" />
					</div>
					<span className="font-extrabold text-md">
						Liked Songs
					</span>
				</a>
			</nav>
			<nav className="mt-8 pt-8 border-t border-zinc-800 flex flex-col gap-2">
				<div>
					<h1 className="text-md text-white font-extrabold">PLAYLISTS</h1>
				</div>
				<a className="text-sm text-zinc-300" href="">Liked songs</a>
				<a className="text-sm text-zinc-300" href="">Daily Mix 1</a>
				<a className="text-sm text-zinc-300" href="">RapCaviar</a>
				<a className="text-sm text-zinc-300" href="">Release Radar</a>
				<a className="text-sm text-zinc-300" href="">Rap Hits (2010 - 2023)</a>
				<a className="text-sm text-zinc-300" href="">DOPE.</a>
				<a className="text-sm text-zinc-300" href="">I Love My 90's</a>
				<a className="text-sm text-zinc-300" href="">Travis Scott</a>
			</nav>
		</aside>
	)
}