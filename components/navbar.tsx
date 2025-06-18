"use client";

import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import type {NavItem} from "@/types";

interface NavbarProps {
	opacity: number;
	blur: number;
}

const navItems: NavItem[] = [
	{name: "HOME", href: "#home"},
	{name: "ABOUT", href: "#about"},
	{name: "SERVICES", href: "#services"},
	{name: "PORTFOLIO", href: "#portfolio"},
	{name: "PRICING", href: "#pricing"},
	{name: "BLOG", href: "#blog"},
	{name: "CONTACT", href: "#contact"},
];

export default function Navbar({opacity, blur}: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	return (
		<>
			{/* Top Row: Responsive Info and Logo */}
			<div className='relative z-40 bg-background pt-6 pb-2'>
				<div className='container'>
					{/* Desktop: info left, logo center, info right. Mobile: logo center, hamburger right, info below */}
					<div className='hidden md:flex items-center justify-between h-20'>
						{/* Left Info */}
						<div className='text-xs tracking-wider text-foreground/80 whitespace-nowrap font-[Playfair Display,serif] italic uppercase'>
							WEDDING PHOTOGRAPHER BASED IN NORTHERN VA
						</div>
						{/* Logo Centered */}
						<div className='flex flex-col items-center mx-auto'>
							<span
								className='text-[2.5rem] font-bold text-primary leading-none tracking-tight'
								style={{fontFamily: "Playfair Display, serif"}}
							>
								VL
							</span>
							<span
								className='text-primary text-lg tracking-[0.3em] font-light mt-1'
								style={{fontFamily: "Playfair Display, serif"}}
							>
								VILLALI
							</span>
						</div>
						{/* Right Info */}
						<div className='text-xs tracking-wider text-foreground/80 whitespace-nowrap font-[Playfair Display,serif] italic uppercase'>
							SERVING THE DMV AND WORLDWIDE.ESTD. 2016
						</div>
					</div>
					{/* Mobile: logo left, hamburger right, info below */}
					<div className='flex md:hidden items-center justify-between relative'>
						{/* Logo Left */}
						<div className='flex flex-col items-start'>
							<span
								className='text-[2.5rem] font-bold text-primary leading-none tracking-tight'
								style={{fontFamily: "Playfair Display, serif"}}
							>
								VL
							</span>
							<span
								className='text-primary text-lg tracking-[0.3em] font-light mt-1'
								style={{fontFamily: "Playfair Display, serif"}}
							>
								VILLALI
							</span>
						</div>
						{/* Hamburger Menu Right */}
						<div className='flex items-center'>
							<Button
								variant='ghost'
								size='icon'
								className='text-primary hover:bg-primary/10'
								onClick={toggleMobileMenu}
								aria-label='Open menu'
							>
								{isMobileMenuOpen ? <X className='h-8 w-8' /> : <Menu className='h-8 w-8' />}
							</Button>
						</div>
					</div>
					{/* Mobile: Info Text Below Logo */}
					<div className='md:hidden mt-2 mb-2 text-center'>
						<div className='font-[Playfair Display,serif] italic tracking-widest text-[0.85rem] text-foreground/80 leading-snug'>
							<div className='uppercase'>WEDDING PHOTOGRAPHER BASED IN NORTHERN VA</div>
							<div className='uppercase'>SERVING THE DMV AND WORLDWIDE.ESTD. 2016</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sticky Navigation Menu (Desktop) */}
			<div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"}`}>
				<div className='container'>
					<div className='hidden md:flex h-14 items-center justify-center'>
						<nav className='w-full'>
							<div className='flex items-center justify-center space-x-4 lg:space-x-12'>
								{navItems.map((item, index) => (
									<div
										key={item.name}
										className='flex items-center'
									>
										<a
											href={item.href}
											className='text-xs font-medium tracking-wider text-foreground/80 transition-colors duration-200 hover:text-primary whitespace-nowrap'
										>
											{item.name}
										</a>
										{index < navItems.length - 1 && <div className='ml-4 lg:ml-12 h-4 w-px bg-primary/30 hidden lg:block'></div>}
									</div>
								))}
							</div>
						</nav>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className='fixed inset-0 z-40 md:hidden'>
					{/* Backdrop */}
					<div
						className='fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity'
						onClick={toggleMobileMenu}
					/>
					{/* Menu Panel */}
					<div className='fixed right-0 top-0 h-full w-[280px] bg-background shadow-xl transform transition-transform duration-300 ease-in-out'>
						<div className='flex h-16 items-center justify-end px-4 border-b border-primary/10'>
							<Button
								variant='ghost'
								size='sm'
								className='text-primary hover:bg-primary/10'
								onClick={toggleMobileMenu}
								aria-label='Close menu'
							>
								<X className='h-6 w-6' />
							</Button>
						</div>
						<nav className='px-4 py-6'>
							<div className='space-y-6'>
								{navItems.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='block text-base font-medium tracking-wider text-foreground/80 transition-colors duration-200 hover:text-primary'
										onClick={toggleMobileMenu}
									>
										{item.name}
									</a>
								))}
							</div>
						</nav>
					</div>
				</div>
			)}
		</>
	);
}
