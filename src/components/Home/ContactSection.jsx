import React, { useRef, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import DiscordIcon from "@/assets/DiscordIcon";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("61QhiMZBuXwmi7dkF");
const ContactSection = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: "", message: "" });

		try {
			await emailjs.sendForm(
				"service_pah268p",
				"template_8aqmnbw",
				form.current
			);

			setSubmitStatus({
				type: "success",
				message:
					"Message sent successfully! We'll get back to you soon.",
			});
			form.current.reset();
		} catch (error) {
			console.error("EmailJS error:", error);
			setSubmitStatus({
				type: "error",
				message: "Failed to send message. Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="contact"
			className="h-full flex items-center justify-center py-24 px-4 relative"
		>
			<div className="container mx-auto max-w-5xl">
				<div className="space-y-4 md:space-y-6 bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-border/50 shadow-lg mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center select-none">
						Get <span className="text-primary"> In</span> Touch
					</h2>
					<p className="text-center mb-4 max-w-2xl mx-auto select-none">
						Want to Contribute to our projects or have any
						questions? Feel free to reach out to us through our
						Discord server or via Mail. We love hearing from the
						community and are always open to new ideas and
						contributions!
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8 bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-border/50 shadow-lg">
						<h3 className="text-2xl font-semibold mb-6">
							Contact Information
						</h3>
						<div className="space-y-6">
							<a
								href="mailto:skyblockoverhaul@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 transition-colors group"
							>
								<div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div className="flex flex-col text-left">
									<h4 className="font-medium text-base">
										Email
									</h4>
									<p className="text-foreground/80 text-sm">
										<span className="inline-block">
											skyblockoverhaul
										</span>
										<span className="inline-block">
											@gmail.com
										</span>
									</p>
								</div>
							</a>
							<a
								href="https://discord.gg/QvM6b9jsJD"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 transition-colors group"
							>
								<div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
									<DiscordIcon />
								</div>
								<div className="flex flex-col text-left">
									<h4 className="font-medium text-base">
										Discord
									</h4>
									<p className="text-foreground/80 text-sm">
										Join our community
									</p>
								</div>
							</a>
						</div>
					</div>

					<div className="space-y-6 bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-border/50 shadow-lg">
						<h3 className="text-2xl font-semibold mb-6 select-none">
							Send Message
						</h3>
						<form
							ref={form}
							onSubmit={handleSubmit}
							className="space-y-4"
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2 select-none"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="user_name"
									placeholder="John Doe"
									className="w-full p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2 select-none"
								>
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="user_email"
									placeholder="john.doe@example.com"
									className="w-full p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2 select-none"
								>
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									placeholder="Write your message here..."
									className="w-full p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-colors placeholder:text-foreground/50"
									required
								></textarea>
							</div>
							{submitStatus.message && (
								<div
									className={`p-3 rounded-lg ${
										submitStatus.type === "success"
											? "bg-green-500/20 text-green-500"
											: "bg-red-500/20 text-red-500"
									}`}
								>
									{submitStatus.message}
								</div>
							)}
							<button
								type="submit"
								disabled={isSubmitting}
								className="cosmic-button w-full py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
