"use client";
import clsx from "clsx";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
	href: Route;
	className?: string;
	activeClassName?: string;
	title: string;
	exact?: boolean;
};

export const ActiveLink = ({ href, title, exact = true }: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive =
		exact || (!exact && href === "/") ? pathname === href : pathname.startsWith(href);
	const className = "h-full p-2 text-slate-600 hover:text-slate-500 hover:underline";
	const activeClassName = "border-2 border-slate-500 rounded-md underline";

	return (
		<Link
			href={href}
			className={clsx(`${className}`, { [`${activeClassName}`]: isActive })}
			aria-label={title}
			aria-current={isActive ? "page" : undefined}
		>
			{title}
		</Link>
	);
};
