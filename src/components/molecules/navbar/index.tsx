import { ActiveLink } from "@/components/atoms/active-link";
import { Route } from "next";

type NavLink = {
	href: Route;
	title: string;
};

const NAV_LINKS: NavLink[] = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "/products",
		title: "All",
	},
];

export const Navbar = () => {
	return (
		<nav className="sticky mt-4 flex h-full flex-row items-center justify-center gap-4 bg-slate-300 px-3 py-1 md:px-2">
			{NAV_LINKS.map((link) => (
				<ActiveLink key={link.href} href={link.href} title={link.title} exact={false} />
			))}
		</nav>
	);
};
