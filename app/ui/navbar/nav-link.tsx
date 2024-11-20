'use client';

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export type LinkData = {
	text: string;
	href: string;
}

export default function NavLink({
	data,
	index,
} : {
	data: LinkData;
	index: number;
}) {
	const pathname = usePathname();

	return (
		<Link
			href={data.href}
			className="hover:no-underline"
		>
			<div
				className={clsx(
					"h-full bg-blue-100 hover:bg-blue-200 border-blue-700 border-3 rounded-t-xl px-4 pt-1 mt-4 transform ease-in hover:-translate-y-2 duration-150",
					{
						'bg-blue-200 -translate-y-1' : data.href === pathname,
						'-translate-x-1/10' : index > 0
					}
				)}
			>
				{data.text}
			</div>
		</Link>
	);
}
