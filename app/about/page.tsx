import AboutSection from "@/components/about";
import AboutQA from "@/components/about-qa";

export default function AboutPage() {
	return (
		<main className='bg-background min-h-screen'>
			<AboutSection variant='page' />
			<AboutQA />
		</main>
	);
}
