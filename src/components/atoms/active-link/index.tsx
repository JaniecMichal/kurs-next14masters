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

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	title,
	exact = true,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = exact || (!exact && href === "/") ? pathname === href : pathname.includes(href);

	return (
		<Link
			href={href}
			className={clsx(`${className}`, { [`${activeClassName}`]: isActive })}
			aria-current
		>
			{title}
		</Link>
	);
};
