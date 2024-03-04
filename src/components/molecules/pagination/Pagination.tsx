"use client";
import { ActiveLink } from "@/components/atoms/active-link";
import type { Route } from "next";
import { useParams } from "next/navigation";

export const Pagination = () => {
	const params = useParams();
	const { page } = params;
	const currentPage = (Array.isArray(page) && page[0]) || page || "1";
	const previousPage = Number(currentPage) > 1 ? Number(currentPage) - 1 : Number(currentPage);
	const nextPage = Number(currentPage) + 1;

	return (
		<nav className="flex items-center justify-between gap-1">
			<ActiveLink
				href={`/products/${previousPage}` as Route}
				title="Previous Page"
				exact={true}
				aria-label="pagination"
			/>
			<ActiveLink
				href={`/products/${nextPage}` as Route}
				title="Next Page"
				exact={true}
				aria-label="pagination"
			/>
		</nav>
	);
};
