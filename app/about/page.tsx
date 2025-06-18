import AboutSection from "@/components/about";
import AboutQA from "@/components/about-qa";
import Testimonials from "@/components/testimonials";

export default function AboutPage() {
	return (
		<main className='bg-background min-h-screen'>
			<AboutSection variant='page' />
			<AboutQA />
			<Testimonials />
		</main>
	);
}
