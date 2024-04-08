import ZoomableImage from "~/components/Image/ZoomableImage";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-300 gap-4">
			<h1 className="text-4xl font-bold">React Zoomable Image</h1>
			<div className="relative flex items-center justify-center">
				<ZoomableImage />
			</div>
		</main>
	);
}
