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
		title: "All products",
	},
];

export const Navbar = () => {
	const defaultLinkClassName = "h-full p-2 text-slate-600 hover:text-slate-500 hover:underline";
	const activeClassName = "border-2 border-slate-500 rounded-md underline";

	return (
		<nav className="sticky mt-4 flex h-full flex-row items-center justify-center gap-4 bg-slate-300 px-3 py-1 md:px-2">
			{NAV_LINKS.map((link) => (
				<ActiveLink
					key={link.href}
					className={defaultLinkClassName}
					activeClassName={activeClassName}
					href={link.href}
					title={link.title}
					exact={false}
				/>
			))}
		</nav>
	);
};
