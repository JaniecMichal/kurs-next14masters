"use client";
import { ActiveLink } from "@/components/atoms/active-link";
import type { Route } from "next";
import { useParams } from "next/navigation";

export const Pagination = () => {
	const params = useParams();
	const { page } = params;
	const currentPage = page || "1";
	const previousPage = Number(currentPage) > 1 ? Number(currentPage) - 1 : Number(currentPage);
	const nextPage = Number(currentPage) + 1;

	return (
		<nav className="flex items-center justify-between gap-1" aria-label="pagination">
			<ActiveLink href={`/products/${previousPage}` as Route} title="Previous Page" exact={true} />
			<ActiveLink href={`/products/${nextPage}` as Route} title="Next Page" exact={true} />
		</nav>
	);
};
