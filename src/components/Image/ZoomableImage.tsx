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

const ZoomableImage = () => {
	return <Wrapper image={NextLogo} />;
};

export default ZoomableImage;

const Wrapper = ({ image }: { image: StaticImageData }) => {
	return (
		<Dialog>
			<DialogTrigger className="border rounded-lg px-2 border-neutral-950 py-3">
				<Image src={image} alt="some description of the image" />
			</DialogTrigger>
			<DialogContent className="fixed inset-0 bg-neutral-400">
				<DialogHeader>
					<DialogTitle className="flex items-end justify-end">
						<DialogClose className="p-2">
							<X width={40} height={40} />
						</DialogClose>
					</DialogTitle>
				</DialogHeader>
				<div className="relative w-full h-full flex items-center space-x-2">
					<Image
						src={image}
						alt="some description of the image"
						fill
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
