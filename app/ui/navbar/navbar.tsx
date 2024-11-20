import NavBadge from "@/app/ui/navbar/nav-badge";
import NavLink from "@/app/ui/navbar/nav-link";
import { YouTube, Twitter, Bluesky } from "@/app/lib/ref-links";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const links = [
		{ href: '/youtube', text: 'YouTube' },
	];

	const socialLinks = [
		{ href: YouTube, src: '/youtube_icon_red.png', width: 64, height: 45,  alt: 'YouTube Icon' },
		{ href: Bluesky, src: '/bluesky_icon.svg', width: 600, height: 530, alt: 'Bluesky Icon' },
		{ href: Twitter, src: '/twitter_icon.png', width: 1200, height: 1227, alt: 'Twitter Icon' },
	];

	return (
		<div className="grid grid-cols-2 bg-white text-slate-900 overflow-hidden sticky top-0">
			<div className="flex px-3">
				<div className="py-2 mr-4">
					<NavBadge />
				</div>
				{
					links.map((link, index) => {
						return (
							<NavLink
								key={link.href}
								data={link}
								index={index}
							/>
						);
					})
				}
			</div>
			<div className="flex justify-end gap-3 px-6">
				{
					socialLinks.map((link) => {
						return (
							<Link
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="self-center"
							>
								<Image
									src={link.src}
									alt={link.alt}
									width={link.width}
									height={link.height}
									className="h-6 w-auto"
								/>
							</Link>
						);
					})
				}
			</div>
		</div>
	);
}
