import Image from "next/image";
import Link from "next/link";

export default function NavBadge() {
	return (
		<Link
			href="/"
		>
			<Image
				src="/michael_150px.png"
				alt="Navbar Badge"
				width={48}
				height={48}
				className="rounded-full"
			/>
		</Link>
	)
}
