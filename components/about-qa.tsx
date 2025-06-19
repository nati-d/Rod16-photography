import {Heart, Camera, Award, Lightbulb, Star, Quote} from "lucide-react";
import type {SectionProps} from "@/types";
import Image from "next/image";

const storyHighlights = [
	{
		number: "01",
		title: "THE BEGINNING",
		content:
			"I discovered my passion for photography by capturing special moments in my community. What started as a creative gift quickly became a meaningful calling, turning artistic vision into a professional journey of preserving life's most precious moments.",
		image: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		number: "02",
		title: "THE REWARD",
		content:
			"The most fulfilling part of my photography career is witnessing the pure joy on my clients' faces when they see their photos for the first time—knowing I've helped preserve moments they'll treasure for a lifetime.",
		image: "https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		number: "03",
		title: "MY STYLE",
		content:
			"My photography style is clean, emotional, and storytelling-focused. Over the years, it has evolved to become more refined and intentional, blending natural light with artistic composition to capture timeless, authentic moments.",
		image: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		number: "04",
		title: "THE EXPERIENCE",
		content:
			"With over 10 years of hands-on experience, I bring a strong eye for detail and expert skills in lighting, editing, and composition. My ability to connect with clients and capture genuine emotions sets my work apart.",
		image: "https://images.pexels.com/photos/8321286/pexels-photo-8321286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		number: "05",
		title: "MY VALUES",
		content:
			"Storytelling and connection are at the heart of everything I do. I'm passionate about capturing real emotions and meaningful moments that reflect each couple's unique story. Trust, creativity, and respect guide every session.",
		image: "https://images.pexels.com/photos/7272219/pexels-photo-7272219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
];

const philosophyPoints = [
	"Every couple has a unique love story that deserves to be told beautifully",
	"Authentic moments happen when people feel comfortable and natural",
	"The best photographs blend artistic vision with genuine emotion",
	"Wedding photography is about preserving legacy, not just taking pictures",
];

export default function AboutQA({className}: SectionProps) {
	return (
		<section className={`bg-background px-4 py-20 sm:px-6 lg:px-8 ${className || ""}`}>
			<div className='mx-auto container'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center gap-4 mb-6'>
						<div className='h-px w-12 bg-primary/20'></div>
						<span className='text-xs font-medium tracking-[0.3em] text-foreground/60 uppercase'>My Story</span>
						<div className='h-px w-12 bg-primary/20'></div>
					</div>
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-light italic tracking-wide text-foreground mb-4'>Capturing Love, Light, & Legacy</h2>
					<p className='text-sm text-foreground/60 max-w-2xl mx-auto italic'>
						Every frame carefully composed. Every moment deeply felt. Every story beautifully preserved.
					</p>
				</div>

				{/* Story Highlights */}
				<div className='mb-20 max-w-4xl mx-auto'>
					<div className='space-y-16'>
						{storyHighlights.map((item, index) => {
							const isEven = index % 2 === 0;

							return (
								<div
									key={index}
									className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
								>
									{/* Image Section */}
									<div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
										<div className='aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg'>
											<Image
												src={item.image}
												alt={`Photography representing ${item.title.toLowerCase()}`}
												width={600}
												height={450}
												className='w-full h-full object-cover'
											/>
										</div>
									</div>

									{/* Content Section */}
									<div className={`space-y-6 ${isEven ? "lg:order-2 text-left" : "lg:order-1 text-right"}`}>
										{/* Number */}
										<div className='text-4xl italic md:text-5xl font-light text-primary leading-none'>{item.number}</div>

										{/* Heading */}
										<h3 className='text-2xl md:text-3xl font-light text-foreground tracking-wide'>{item.title}</h3>

										{/* Description */}
										<p className='text-foreground/70 leading-relaxed text-lg max-w-md'>{item.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Philosophy Section */}
				<div className='bg-secondary/20 rounded-lg p-12 lg:p-16 mb-20'>
					<div className='text-center mb-12'>
						<Quote className='h-8 w-8 text-primary mb-4 mx-auto' />
						<h3 className='text-3xl font-light tracking-wide text-foreground mb-6'>My Photography Philosophy</h3>
						<div className='h-px w-24 bg-primary/20 mx-auto'></div>
					</div>

					<div className='grid lg:grid-cols-2 gap-16 items-start'>
						<div className='space-y-8'>
							<div>
								<h4 className='text-2xl font-light text-foreground mb-6 tracking-wide'>What I Believe</h4>
								<div className='h-px w-12 bg-primary/30 mb-6'></div>
							</div>
							<ul className='space-y-6'>
								{philosophyPoints.map((point, index) => (
									<li
										key={index}
										className='flex items-start gap-4'
									>
										<div className='w-2 h-2 rounded-full bg-primary/40 mt-3 flex-shrink-0'></div>
										<p className='text-foreground/70 leading-relaxed text-base'>{point}</p>
									</li>
								))}
							</ul>
						</div>

						<div className='bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-secondary/20'>
							<blockquote className='text-lg font-light italic text-foreground/70 leading-relaxed mb-6'>
								"Photography is not just about capturing images—it's about preserving emotions, moments, and stories that will be cherished for
								generations to come."
							</blockquote>
							<cite className='text-sm font-medium tracking-wider text-foreground/60 uppercase'>— Villa Li</cite>

							<div className='mt-8 pt-8 border-t border-secondary/20'>
								<div className='grid grid-cols-2 gap-6 text-center'>
									<div>
										<div className='text-2xl font-light text-foreground mb-1'>500+</div>
										<div className='text-sm text-foreground/60'>Love Stories</div>
									</div>
									<div>
										<div className='text-2xl font-light text-foreground mb-1'>10+</div>
										<div className='text-sm text-foreground/60'>Years Experience</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className='text-center'>
					<div className='inline-block bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-secondary/20'>
						<p className='text-lg font-light text-foreground/70 mb-6 leading-relaxed'>
							Ready to tell your love story? Let's create something beautiful together.
						</p>
						<div className='inline-flex items-center gap-4'>
							<div className='h-px w-12 bg-primary/20'></div>
							<a
								href='#contact'
								className='text-sm font-medium tracking-wider text-foreground/60 transition-colors duration-200 hover:text-foreground uppercase'
							>
								Start Your Journey
							</a>
							<div className='h-px w-12 bg-primary/20'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
