import { ActiveLink } from "@/components/atoms/active-link";

export const Pagination = () => {
	return (
		<nav className="flex items-center justify-between gap-1" aria-label="pagination">
			<ActiveLink href="/products" title="Previous Page" exact={true} />
			<ActiveLink href="/products" title="Next Page" exact={true} />
		</nav>
	);
};
