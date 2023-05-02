import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

export default function Page() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1 justify-between">
				<Sidebar />
				<Main />
			</div>
			<Footer />
		</div>
	)
}
