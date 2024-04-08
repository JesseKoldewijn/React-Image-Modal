"use client";

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";
import NextLogo from "~/../public/next.svg";
import { DialogHeader } from "../ui/dialog";
import { X } from "lucide-react";
import {
	TransformComponent,
	TransformWrapper,
	useControls,
} from "react-zoom-pan-pinch";

const ZoomableImage = () => {
	return (
		<Dialog>
			<DialogTrigger className="border rounded-lg px-2 border-neutral-950 py-3">
				<Image src={NextLogo} alt="some description of the image" />
			</DialogTrigger>
			<DialogContent className="fixed inset-0 bg-neutral-400">
				<DialogHeader>
					<DialogTitle className="flex items-end justify-end">
						<DialogClose className="p-2">
							<X width={40} height={40} />
						</DialogClose>
					</DialogTitle>
				</DialogHeader>
				<Wrapper image={NextLogo} />
			</DialogContent>
		</Dialog>
	);
};

export default ZoomableImage;

const Wrapper = ({ image }: { image: StaticImageData }) => {
	const Controls = () => {
		const { zoomIn, zoomOut, resetTransform } = useControls();

		return (
			<div className="fixed z-10 left-4 top-4 flex gap-4">
				<button
					className="border-neutral-950 border rounded-md px-2 py-1"
					onClick={() => zoomIn()}
				>
					Zoom In
				</button>
				<button
					className="border-neutral-950 border rounded-md px-2 py-1"
					onClick={() => zoomOut()}
				>
					Zoom Out
				</button>
				<button
					className="border-neutral-950 border rounded-md px-2 py-1"
					onClick={() => resetTransform()}
				>
					Reset
				</button>
			</div>
		);
	};

	return (
		<div className="w-full h-full flex items-center space-x-2">
			<TransformWrapper>
				<Controls />
				<TransformComponent>
					<div className="relative w-screen h-screen flex items-center space-x-2">
						<Image
							src={image}
							alt="some description of the image"
							fill
						/>
					</div>
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
};
