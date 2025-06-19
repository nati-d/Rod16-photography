"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {contactFormSchema} from "@/lib/schema";

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		try {
			// Here you would typically send the data to your backend
			console.log("Form data:", data);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setSubmitSuccess(true);
			reset();
		} catch (error) {
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='space-y-6 max-w-2xl mx-auto '
		>
			<div className='space-y-4 text-sm'>
				<p className='text-foreground/60 leading-relaxed'>
					If you believe we'd be a great match, kindly complete the form below to share a little about your story and vision for your special day. I
					aim to respond within 24 business hours. If you don't hear from us within 24 business hours, please ensure to check your spam folder or
					reach out directly via email at{" "}
					<a
						href='mailto:rod16zedo@gmail.com'
						className='text-primary underline'
					>
						rod16zedo@gmail.com
					</a>
					.
				</p>
			</div>

			<div className='space-y-6'>
				{/* Name Fields */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<input
							type='text'
							{...register("name")}
							placeholder='YOUR NAME *'
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
						{errors.name && <p className='mt-1 text-xs text-red-500'>{errors.name.message}</p>}
					</div>
					<div>
						<input
							type='text'
							{...register("partnerName")}
							placeholder="YOUR PARTNER'S NAME"
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
					</div>
				</div>

				{/* Wedding Details */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<input
							type='text'
							{...register("weddingDate")}
							placeholder='WEDDING DATE'
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
					</div>
					<div>
						<input
							type='text'
							{...register("weddingLocation")}
							placeholder='WEDDING VENUE / LOCATION'
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
					</div>
				</div>

				{/* Contact Info */}
				<div className='space-y-6'>
					<div>
						<input
							type='email'
							{...register("email")}
							placeholder='EMAIL ADDRESS *'
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
						{errors.email && <p className='mt-1 text-xs text-red-500'>{errors.email.message}</p>}
					</div>
					<div>
						<input
							type='tel'
							{...register("phone")}
							placeholder='PHONE NUMBER'
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
						{errors.phone && <p className='mt-1 text-xs text-red-500'>{errors.phone.message}</p>}
					</div>
				</div>

				{/* Additional Info */}
				<div>
					<input
						type='text'
						{...register("referralSource")}
						placeholder='HOW DID YOU HEAR ABOUT US?'
						className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
					/>
				</div>

				{/* Instagram Handles */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<input
							type='text'
							{...register("instagramHandle")}
							placeholder='YOUR INSTAGRAM HANDLE'
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
					</div>
					<div>
						<input
							type='text'
							{...register("partnerInstagramHandle")}
							placeholder="YOUR PARTNER'S INSTAGRAM HANDLE"
							className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
						/>
					</div>
				</div>

				{/* Budget */}
				<div>
					<input
						type='text'
						{...register("photoBudget")}
						placeholder='PHOTO BUDGET'
						className='w-full border-b border-secondary/20 py-2 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40'
					/>
				</div>

				{/* Details */}
				<div>
					<textarea
						{...register("details")}
						placeholder='THE DETAILS'
						rows={4}
						className='w-full border border-secondary/20 p-3 focus:outline-none focus:border-primary bg-transparent text-foreground placeholder:text-foreground/40 resize-none'
					></textarea>
				</div>
			</div>

			{/* Submit Button */}
			<div className='pt-6'>
				<button
					type='submit'
					disabled={isSubmitting}
					className='w-full bg-primary text-background px-8 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
				>
					{isSubmitting ? "Sending..." : "Send"}
				</button>
			</div>

			{/* Success Message */}
			{submitSuccess && <div className='text-center p-4 bg-primary/5 text-primary'>Thank you for your message! I'll get back to you soon.</div>}
		</form>
	);
}
