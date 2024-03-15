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
		<>
			<div className=" sticky top-0 z-10 h-5 w-full bg-slate-300"></div>
			<nav className="before: sticky top-5 z-10 flex h-full flex-row items-center justify-center gap-4 bg-slate-300 px-3 pb-5 opacity-90 backdrop-blur-lg md:px-2">
				{NAV_LINKS.map((link) => (
					<ActiveLink key={link.href} href={link.href} title={link.title} exact={false} />
				))}
			</nav>
		</>
	);
};
