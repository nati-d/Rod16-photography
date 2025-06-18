import {Instagram, Facebook} from "lucide-react";
import type {SectionProps} from "@/types";
import {footerImages, footerNavItems} from "@/data/footer";

export default function Footer({className}: SectionProps) {
	return (
		<footer className={`bg-primary z-20 relative ${className || ""}`}>
			{/* Image Gallery Section */}
			<div className='px-4 pt-16 pb-12 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-7xl'>
					<div className='grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6'>
						{footerImages.map((image) => (
							<div
								key={image.id}
								className='aspect-square overflow-hidden'
							>
								<img
									src={image.src || "/placeholder.svg"}
									alt={image.alt}
									className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Logo Section */}
			<div className='px-4 pb-8 sm:px-6 lg:px-8'>
				<div className='mx-auto container text-center'>
					<div className='mb-8'>
						{/* Logo Icon and Brand Name (from Navbar) */}
						<div className='mb-3 flex flex-col items-center justify-center'>
							<span
								className='text-[2.5rem] font-bold text-background leading-none tracking-tight'
								style={{fontFamily: "Playfair Display, serif"}}
							>
								RP
							</span>
							<span
								className='text-background/80 text-lg tracking-[0.3em] font-light mt-1'
								style={{fontFamily: "Playfair Display, serif"}}
							>
								ROD16 PHOTOGRAPHY
							</span>
						</div>
					</div>
					{/* Separator Line */}
					<div className='mx-auto mb-8 h-px w-full max-w-4xl bg-white/30'></div>
				</div>
			</div>

			{/* Navigation Section */}
			<div className='px-4 pb-8 sm:px-6 lg:px-8'>
				<div className='mx-auto container'>
					<nav className='flex flex-wrap justify-center gap-8 sm:gap-12'>
						{footerNavItems.map((item, index) => (
							<div
								key={item.name}
								className='flex items-center'
							>
								<a
									href={item.href}
									className='text-sm font-medium tracking-wider text-white/90 transition-colors duration-200 hover:text-white'
								>
									{item.name}
								</a>
								{index < footerNavItems.length - 1 && <div className='ml-8 hidden h-4 w-px bg-white/30 sm:ml-12 sm:block'></div>}
							</div>
						))}
					</nav>
				</div>
			</div>

			{/* Contact Information */}
			<div className='px-4 pb-8 sm:px-6 lg:px-8'>
				<div className='mx-auto container'>
					<div className='flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 sm:gap-8'>
						<span>Washington D.C.</span>
						<div className='hidden h-4 w-px bg-background sm:block'></div>
						<a
							href='mailto:Info@VillaliPhoto.com'
							className='transition-colors duration-200 hover:text-white'
						>
							Info@VillaliPhoto.com
						</a>
						<div className='hidden h-4 w-px bg-background sm:block'></div>
						<a
							href='tel:571-309-3237'
							className='transition-colors duration-200 hover:text-white'
						>
							571-309-3237
						</a>
						<div className='hidden h-4 w-px bg-background sm:block'></div>
						<span>Website: 2615705758</span>

						{/* Social Media Icons */}
						<div className='flex items-center gap-4 ml-4'>
							<div className='h-4 w-px bg-background'></div>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white/80 transition-colors duration-200 hover:text-white'
								aria-label='Follow on Instagram'
							>
								<Instagram className='h-4 w-4' />
							</a>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white/80 transition-colors duration-200 hover:text-white'
								aria-label='Follow on Facebook'
							>
								<Facebook className='h-4 w-4' />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='border-t border-white/20 px-4 py-6 sm:px-6 lg:px-8'>
				<div className='mx-auto container text-center'>
					<p className='text-xs text-background/60 tracking-wider'>© 2024 ROD16 PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
				</div>
			</div>
		</footer>
	);
}
