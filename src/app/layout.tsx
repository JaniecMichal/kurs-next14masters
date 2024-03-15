import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/molecules/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Product List",
	description: "Simply product list as core for shop page.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`relative bg-slate-200 ${inter.className}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
