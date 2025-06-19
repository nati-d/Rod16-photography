"use client";

import {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";

// Portfolio categories
const categories = ["All", "Wedding", "Engagement", "Portrait", "Family", "Event"];

// Portfolio items with Pexels images
const portfolioItems = [
	// Wedding Category
	{
		id: 1,
		category: "Wedding",
		image: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
		title: "Elegant Garden Wedding",
		description: "A beautiful celebration of love in nature",
	},
	{
		id: 2,
		category: "Wedding",
		image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
		title: "Sunset Ceremony",
		description: "Golden hour wedding moments",
	},
	{
		id: 3,
		category: "Wedding",
		image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
		title: "Intimate Moments",
		description: "Capturing pure emotions",
	},
	// Engagement Category
	{
		id: 4,
		category: "Engagement",
		image: "https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg",
		title: "Urban Love Story",
		description: "City streets engagement session",
	},
	{
		id: 5,
		category: "Engagement",
		image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
		title: "Natural Connection",
		description: "Authentic moments in nature",
	},
	// Portrait Category
	{
		id: 6,
		category: "Portrait",
		image: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg",
		title: "Professional Headshots",
		description: "Corporate and personal branding",
	},
	{
		id: 7,
		category: "Portrait",
		image: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg",
		title: "Creative Portraits",
		description: "Artistic expression through portraiture",
	},
	// Family Category
	{
		id: 8,
		category: "Family",
		image: "https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg",
		title: "Family Bonds",
		description: "Cherished moments together",
	},
	{
		id: 9,
		category: "Family",
		image: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg",
		title: "Generational Joy",
		description: "Multi-generational family sessions",
	},
	// Event Category
	{
		id: 10,
		category: "Event",
		image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
		title: "Corporate Events",
		description: "Professional event coverage",
	},
	{
		id: 11,
		category: "Event",
		image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg",
		title: "Special Celebrations",
		description: "Milestone moments and gatherings",
	},
	{
		id: 12,
		category: "Event",
		image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
		title: "Social Events",
		description: "Capturing the energy of social gatherings",
	},
];

export default function PortfolioPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredItems = selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative h-[85vh] flex items-center justify-center'>
				<Image
					src='https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='Portfolio Hero'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-black/50' />
				<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

				<div className='container mx-auto px-4'>
					<div className='relative z-10 max-w-4xl mx-auto text-center'>
						<div className='inline-flex items-center gap-4 mb-6'>
							<div className='h-px w-12 bg-background/20'></div>
							<span className='text-xs font-medium tracking-[0.3em] text-background/60 uppercase'>My Work</span>
							<div className='h-px w-12 bg-background/20'></div>
						</div>
						<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic tracking-wide mb-6 text-white'>Portfolio</h1>
						<p className='text-background/80 text-sm md:text-base font-light max-w-xl mx-auto'>
							A collection of moments, emotions, and stories captured through my lens
						</p>
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<section className='py-20 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='flex flex-wrap justify-center gap-4 mb-16'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 text-sm transition-colors duration-200
									${selectedCategory === category ? "bg-primary text-background" : "bg-secondary/20 text-foreground hover:bg-primary/10"}`}
							>
								{category}
							</button>
						))}
					</div>

					{/* Portfolio Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<AnimatePresence mode='wait'>
							{filteredItems.map((item) => (
								<motion.div
									key={item.id}
									layout
									initial={{opacity: 0, scale: 0.9}}
									animate={{opacity: 1, scale: 1}}
									exit={{opacity: 0, scale: 0.9}}
									transition={{duration: 0.3}}
									className='group relative aspect-[3/4] overflow-hidden bg-foreground/5'
								>
									<Image
										src={item.image}
										alt={item.title}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<div className='absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
											<h3 className='text-lg font-light mb-1'>{item.title}</h3>
											<p className='text-sm text-background/80'>{item.description}</p>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
			</section>
		</main>
	);
}
