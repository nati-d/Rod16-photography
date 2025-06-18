import AboutSection from "@/components/about";
import Testimonials from "@/components/testimonials";

export default function AboutPage() {
	return (
		<main className='bg-background min-h-screen'>
			<AboutSection variant='page' />
			<Testimonials />
		</main>
	);
}
