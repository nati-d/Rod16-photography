import {MessageCircle, Calendar, Camera, Heart, Download} from "lucide-react";

const processSteps = [
	{
		icon: MessageCircle,
		title: "Initial Consultation",
		description:
			"We'll start with a phone or video call to discuss your vision, timeline, and photography needs. This helps me understand your style and preferences.",
		details: ["Free consultation", "Discuss your vision", "Review packages", "Answer questions"],
	},
	{
		icon: Calendar,
		title: "Booking & Planning",
		description:
			"Once you're ready to move forward, I'll send you a contract and invoice. We'll also schedule your engagement session and plan your wedding day timeline.",
		details: ["Secure your date", "Sign contract", "Pay deposit", "Plan timeline"],
	},
	{
		icon: Camera,
		title: "Your Wedding Day",
		description:
			"On your special day, I'll be there to capture every moment with artistry and care. I work discreetly to ensure you can enjoy your celebration naturally.",
		details: ["Full coverage", "Natural moments", "Professional service", "Backup equipment"],
	},
	{
		icon: Heart,
		title: "Editing & Curation",
		description:
			"I carefully select and edit your best images, ensuring each photo tells your story beautifully. This process takes 2-4 weeks depending on your package.",
		details: ["Careful selection", "Professional editing", "Color correction", "Artistic enhancement"],
	},
	{
		icon: Download,
		title: "Delivery & Enjoyment",
		description:
			"Your beautifully edited photos will be delivered through an online gallery where you can view, download, and share your memories with family and friends.",
		details: ["Online gallery", "High-resolution files", "Print release", "Lifetime access"],
	},
];

export default function ProcessSection() {
	return (
		<section className='py-20 px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto container'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-4 mb-6'>
						<div className='h-px w-12 bg-primary/20'></div>
						<span className='text-xs font-medium tracking-[0.3em] text-foreground/60 uppercase'>How It Works</span>
						<div className='h-px w-12 bg-primary/20'></div>
					</div>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-light italic tracking-wide text-foreground mb-6'>My Process</h2>
					<p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
						From our first conversation to your final gallery, I'm here to make your photography experience seamless and enjoyable.
					</p>
				</div>

				{/* Process Steps */}
				<div className='max-w-6xl mx-auto'>
					<div className='grid gap-12 lg:grid-cols-5'>
						{processSteps.map((step, index) => {
							const IconComponent = step.icon;
							return (
								<div
									key={index}
									className='relative'
								>
									{/* Step Number */}
									<div className='text-6xl md:text-8xl font-light text-primary/10 absolute -top-4 -left-4'>
										{String(index + 1).padStart(2, "0")}
									</div>

									{/* Content */}
									<div className='relative z-10'>
										{/* Icon */}
										<div className='flex justify-center mb-6'>
											<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
												<IconComponent className='h-8 w-8 text-primary' />
											</div>
										</div>

										{/* Title */}
										<h3 className='text-xl font-light text-foreground mb-4 text-center'>{step.title}</h3>

										{/* Description */}
										<p className='text-foreground/70 text-sm leading-relaxed mb-6 text-center'>{step.description}</p>

										{/* Details List */}
										<ul className='space-y-2'>
											{step.details.map((detail, detailIndex) => (
												<li
													key={detailIndex}
													className='flex items-center gap-2 text-xs text-foreground/60'
												>
													<div className='w-1 h-1 rounded-full bg-primary/40 flex-shrink-0'></div>
													{detail}
												</li>
											))}
										</ul>
									</div>

									{/* Connector Line */}
									{index < processSteps.length - 1 && <div className='hidden lg:block absolute top-8 -right-6 w-12 h-px bg-primary/20'></div>}
								</div>
							);
						})}
					</div>
				</div>

				{/* CTA Section */}
				<div className='text-center mt-20'>
					<div className='bg-secondary/20 rounded-lg p-8 max-w-2xl mx-auto'>
						<h3 className='text-2xl font-light text-foreground mb-4'>Ready to Get Started?</h3>
						<p className='text-foreground/70 mb-6'>
							Let's begin your photography journey. I'm excited to capture your love story and create memories that will last a lifetime.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<a
								href='#pricing'
								className='inline-flex items-center justify-center bg-primary text-background px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors duration-200'
							>
								View Packages
							</a>
							<a
								href='/contact'
								className='inline-flex items-center justify-center border border-primary text-primary px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-primary hover:text-background transition-colors duration-200'
							>
								Get In Touch
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
