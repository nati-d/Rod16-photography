import Image from "next/image";
import {Camera, Heart, Users, MapPin, Clock, Star} from "lucide-react";

const services = [
	{
		icon: Heart,
		title: "Wedding Photography",
		description:
			"Full-day coverage capturing every emotion, culture, and once-in-a-lifetime moment. I love documenting the joy, love, and connection between couples and families with creativity and purpose.",
		image: "https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg",
		price: "Starting at $2,500",
	},
	{
		icon: Users,
		title: "Portrait Photography",
		description:
			"Perfect for individuals, couples, families, or maternity. I capture authentic moments that tell your unique story with a natural, storytelling approach.",
		image: "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg",
		price: "Starting at $450",
	},
	{
		icon: Star,
		title: "Fashion & Commercial",
		description:
			"Half-day & full-day rates for fashion lookbooks, editorial shoots, product photography, and personal branding. Includes planning consultation and basic usage rights.",
		image: "https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg",
		price: "Custom pricing",
	},
	{
		icon: MapPin,
		title: "Destination Weddings",
		description:
			"Worldwide coverage for your destination wedding. I travel to capture your special day wherever it may be, with packages available upon request.",
		image: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		price: "Contact for quote",
	},
	{
		icon: Camera,
		title: "Travel & Cultural",
		description: "Specializing in travel and cultural photography, capturing authentic moments that tell unique stories for clients around the world.",
		image: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg",
		price: "Project-based",
	},
	{
		icon: Clock,
		title: "Custom Projects",
		description:
			"Let's build your vision together. Available for travel, events, and cultural/documentary photography with custom quotes based on your project goals.",
		image: "https://images.pexels.com/photos/7272219/pexels-photo-7272219.jpeg",
		price: "Contact for quote",
	},
];

export default function ServicesGrid() {
	return (
		<section className='py-20 px-4 sm:px-6 lg:px-8'>
			<div className='mx-auto container'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center gap-4 mb-6'>
						<div className='h-px w-12 bg-primary/20'></div>
						<span className='text-xs font-medium tracking-[0.3em] text-foreground/60 uppercase'>What I Offer</span>
						<div className='h-px w-12 bg-primary/20'></div>
					</div>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-light italic tracking-wide text-foreground mb-6'>Photography Services</h2>
					<p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
						I offer a wide range of photography services including weddings, portraits, lifestyle, fashion, commercial, and editorial photography. I
						also specialize in travel and cultural photography, capturing authentic moments that tell unique stories for clients around the world.
					</p>
				</div>

				{/* Services List */}
				<div className='space-y-24'>
					{services.map((service, index) => {
						const IconComponent = service.icon;
						const isEven = index % 2 === 0;

						return (
							<div
								key={index}
								className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-center`}
							>
								{/* Image */}
								<div className='w-full lg:w-1/2'>
									<div className='relative h-[400px] overflow-hidden rounded-lg shadow-lg'>
										<Image
											src={service.image || "/placeholder.svg"}
											alt={service.title}
											fill
											className='object-cover'
										/>
									</div>
								</div>

								{/* Content */}
								<div className='w-full lg:w-1/2 space-y-6'>
									<div className='flex items-center gap-4'>
										<IconComponent className='h-5 w-5 text-primary' />
										<div className='h-px flex-1 bg-primary/20'></div>
									</div>

									<div>
										<h3 className='text-2xl md:text-3xl font-light text-foreground mb-4'>{service.title}</h3>
										<p className='text-foreground/70 leading-relaxed mb-6'>{service.description}</p>
										<div className='flex items-center justify-between'>
											<span className='text-sm font-medium text-primary uppercase tracking-wider'>{service.price}</span>
											<a
												href='/contact'
												className='text-sm text-foreground hover:text-primary transition-colors border-b border-foreground/20 hover:border-primary/40 pb-1'
											>
												Learn More
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

			</div>
		</section>
	);
}
