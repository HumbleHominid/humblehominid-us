import Link from "next/link";

export type FooterItem = {
	text: string;
	href: string;
}

export default function FooterSection({
	title,
	links,
} : {
	title: string;
	links: FooterItem[];
}) {
	return (
		<div className="flex flex-col items-center sm:items-start">
			<div>
				<span className="font-semibold">{title}</span>
			</div>
			{links.map((link) => {
				return (
					<Link
						key={link.href}
						rel="noopener noreferrer"
						href={link.href}
						target="_blank"
						className="text-sm hover:underline hover:underline-offset-4"
					>
						{link.text}
					</Link>
				);
			})}
		</div>
	);
}