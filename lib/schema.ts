import {z} from "zod";

export const contactFormSchema = z.object({
	name: z.string().min(2, "Name is required"),
	partnerName: z.string().optional(),
	weddingDate: z.string().optional(),
	weddingLocation: z.string().optional(),
	email: z.string().email("Please enter a valid email address"),
	phone: z.string().min(10, "Phone number is required"),
	referralSource: z.string().optional(),
	instagramHandle: z.string().optional(),
	partnerInstagramHandle: z.string().optional(),
	photoBudget: z.string().optional(),
	details: z.string().optional(),
});
