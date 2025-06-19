import ServicesHero from "@/components/services-hero";
import ServicesGrid from "@/components/services-grid";
import PricingSection from "@/components/pricing-section";
import ProcessSection from "@/components/process-section";
import FAQSection from "@/components/faq-section";

export default function ServicesPage() {
	return (
		<main className='bg-background min-h-screen'>
			<ServicesHero />
			<ServicesGrid />
			<PricingSection />
			<ProcessSection />
			<FAQSection />
		</main>
	);
}
