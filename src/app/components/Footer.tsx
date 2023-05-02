import { Heart, Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from 'next/image';

export function Footer() {
	return (
		<footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<Image src="/rodeo.jpg" alt="Album cover" className="rounded-md" width={56} height={56} />
				<div className="flex flex-col mb-4">
					<div className="flex-row">
						<strong className="text-white">
							Highest In The Room
							<Heart size={16} className="text-zinc-400 ml-2" />
						</strong>
					</div>
					<span className="text-xs text-zinc-400">
						Travis Scott
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="flex items-center gap-7">
					<Shuffle size={20} className="text-zinc-200" />
					<SkipBack size={20} className="text-zinc-200" />
					<button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
						<Play />
					</button>
					<SkipForward size={20} className="text-zinc-200" />
					<Repeat size={20} className="text-zinc-200" />
				</div>
				<div className="flex items-center gap-4 mt-2">
					<span className="text-xs text-zinc-500">0:44</span>
					<div style={{ width: '40vw' }} className="h-1 rounded-full bg-zinc-600">
						<div className="h-full w-2/4 rounded-full bg-white"></div>
					</div>
					<span className="text-xs text-zinc-500">4:44</span>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<Mic2 size={20} className="text-zinc-200" />
				<LayoutList size={20} className="text-zinc-200" />
				<Laptop2 size={20} className="text-zinc-200" />
				<Volume2 size={20} className="text-zinc-200" />
				<div className="h-1 rounded-full w-24 bg-zinc-600">
					<div className="h-full w-3/4 rounded-full bg-white"></div>
				</div>
				<Maximize2 size={20} className="text-zinc-200" />
			</div>
		</footer>
	)
}