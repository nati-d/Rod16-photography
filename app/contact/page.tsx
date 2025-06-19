"use client";

import ContactForm from "@/components/contact-form";
import {motion} from "framer-motion";

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-background/50'>
			<div className='max-w-4xl mx-auto px-4 py-16 sm:py-24'>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					className='space-y-12'
				>
					<div className='text-center space-y-4'>
						<h1 className='text-3xl sm:text-4xl font-light text-foreground'>Contact Zadig</h1>
					</div>

					<ContactForm />
				</motion.div>
			</div>
		</div>
	);
}
