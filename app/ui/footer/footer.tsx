import { ArcadiaDiscord, ArcadiaTwitter, Twitter, YouTube, Bluesky, ArcadiaBluesky } from "@/app/lib/ref-links";
import FooterSection from "@/app/ui/footer/footer-section";

export default function Footer() {
	const personalLinks = [
		{ text: 'YouTube', href: YouTube },
		{ text: 'Twitter/X', href: Twitter },
		{ text: 'Bluesky', href: Bluesky }
	];

	const arcadiaLinks = [
		{ text: 'Discord', href: ArcadiaDiscord },
		{ text: 'Twitter/X', href: ArcadiaTwitter },
		{ text: 'Bluesky', href: ArcadiaBluesky },
	];

	return (
		<footer className="flex flex-col sm:flex-row sm:gap-12 gap-4 items-center sm:items-start justify-center w-full py-4">
			{/* Personal Links */}
			<FooterSection
				title="HumbleHominid"
				links={personalLinks}
			/>
			{/* Arcadia Links */}
			<FooterSection
				title="Arcadia"
				links={arcadiaLinks}
			/>
			{/* Copyright */}
			{/* TODO Apply for copyright */}
		</footer>
	);
}