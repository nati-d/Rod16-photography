"use client";

import {useScroll} from "@/hooks/use-scroll";
import Navbar from "@/components/navbar";

export default function ClientLayout({children}: {children: React.ReactNode}) {
	const {navbarOpacity, navbarBlur} = useScroll();

	return (
		<>
			<Navbar
				opacity={navbarOpacity}
				blur={navbarBlur}
			/>
			{children}
		</>
	);
}
