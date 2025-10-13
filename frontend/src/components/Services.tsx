import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Plane, Home, MapPin, Bus, Radio, Monitor, Megaphone, Factory, Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import exteriorWrapImage from "@/assets/indian-aircraft-hero-2.jpg";
import interiorCabinImage from "@/assets/interior-aircraft-branding-wide-cabin.jpg";
import airportGroundImage from "@/assets/airport-ground-services-tarmac-focus.jpg";
import unipolesImage from "@/assets/outdoor-media-unipoles-dusk.jpg";
import hoardingsImage from "@/assets/outdoor-billboard-advertising.jpg";
import busBrandingImage from "@/assets/transit-bus-branding-side-profile.jpg";
import metroAdImage from "@/assets/transit-bus-interior-ads.jpg";
import ledBillboardsImage from "@/assets/digital-led-displays-urban.jpg";
import interactiveKioskImage from "@/assets/digital-interactive-kiosk-user-closeup.jpg";
import tvStudioImage from "@/assets/traditional-media-tv-studio-wide.jpg";
import productionImage from "@/assets/production-facility-team-in-action.jpg";
import strategyImage from "@/assets/business-meeting-discussion.jpg";

const services = [
	{
		icon: Plane,
		title: "Aircraft Exterior Branding",
		description: "Complete 360° aircraft wraps at Hyderabad Airport. Your brand dominates the runway and reaches 450,000+ daily passengers.",
		features: [
			"Full Aircraft Wraps",
			"DGCA Compliant",
			"7-Day Installation",
			"Hyderabad Domestic Focus",
		],
		image: exteriorWrapImage,
		category: "Aircraft Advertising",
	},
	{
		icon: Home,
		title: "Aircraft Interior Branding",
		description: "Dominate 2.5 hours of captive attention with overhead bins, skyline panels, headrests, and seatback branding.",
		features: [
			"100% Captive Audience",
			"Multiple Touchpoints",
			"Premium Traveler Focus",
			"High Engagement Rate",
		],
		image: interiorCabinImage,
		category: "Aircraft Advertising",
	},
	{
		icon: MapPin,
		title: "Airport Ground Services",
		description: "Brand visibility across baggage carts, check-in kiosks, boarding passes, and ground equipment at Hyderabad Airport.",
		features: [
			"Baggage Cart Branding",
			"Check-in Kiosks",
			"Boarding Pass Integration",
			"Ground Equipment Wraps",
		],
		image: airportGroundImage,
		category: "Aircraft Advertising",
	},
	{
		icon: Megaphone,
		title: "Outdoor Unipole Billboards",
		description: "Prime highway locations with massive unipole billboards reaching thousands of daily commuters across Hyderabad.",
		features: [
			"Premium Highway Locations",
			"High Visibility Impact",
			"24/7 Brand Exposure",
			"Professional Installation",
		],
		image: unipolesImage,
		category: "Outdoor Advertising",
	},
	{
		icon: Megaphone,
		title: "Street Hoardings & Banners",
		description: "Dominate busy commercial streets with strategically placed hoardings and banners in high-traffic Hyderabad areas.",
		features: [
			"High Foot Traffic Areas",
			"Commercial Street Focus",
			"Multiple Format Options",
			"Strategic Placement",
		],
		image: hoardingsImage,
		category: "Outdoor Advertising",
	},
	{
		icon: Bus,
		title: "Bus Branding & Wraps",
		description: "Mobile billboards throughout Hyderabad with full bus wraps reaching diverse audiences across the city.",
		features: [
			"Full Bus Wraps",
			"City-Wide Coverage",
			"Moving Billboards",
			"High Daily Impressions",
		],
		image: busBrandingImage,
		category: "Transit Advertising",
	},
	{
		icon: Radio,
		title: "Metro & Rail Advertising",
		description: "Capture commuters at metro platforms and inside trains with premium advertising placements.",
		features: [
			"Platform Panels",
			"Interior Train Branding",
			"Station Domination",
			"Daily Commuter Reach",
		],
		image: metroAdImage,
		category: "Transit Advertising",
	},
	{
		icon: Monitor,
		title: "LED Digital Billboards",
		description: "Dynamic digital displays at prime Hyderabad intersections with real-time content updates and massive visibility.",
		features: [
			"Prime Locations",
			"Dynamic Content",
			"Night Illumination",
			"Real-Time Updates",
		],
		image: ledBillboardsImage,
		category: "Digital Advertising",
	},
	{
		icon: Monitor,
		title: "Interactive Digital Kiosks",
		description: "Engage audiences at malls and airports with interactive touch screens and branded digital experiences.",
		features: [
			"Touch Interactivity",
			"Shopping Mall Placement",
			"Airport Lounge Integration",
			"User Engagement Tracking",
		],
		image: interactiveKioskImage,
		category: "Digital Advertising",
	},
	{
		icon: Radio,
		title: "TV & Radio Advertising",
		description: "Professional production and broadcast placements across leading TV channels and radio stations in Hyderabad.",
		features: [
			"Professional Production",
			"Prime Time Slots",
			"Regional Reach",
			"Multi-Channel Strategy",
		],
		image: tvStudioImage,
		category: "Traditional Media",
	},
	{
		icon: Factory,
		title: "Production & Installation",
		description: "In-house large-format printing facility with expert installation teams ensuring perfect execution every time.",
		features: [
			"Large Format Printing",
			"Quality Control",
			"Expert Installation",
			"Fast Turnaround",
		],
		image: productionImage,
		category: "Production Services",
	},
	{
		icon: Briefcase,
		title: "360° Campaign Management",
		description: "Full-service campaign planning, execution, and tracking across all channels with dedicated account management.",
		features: [
			"Strategic Planning",
			"Multi-Channel Integration",
			"Performance Tracking",
			"Dedicated Account Manager",
		],
		image: strategyImage,
		category: "Campaign Services",
	},
];

export const Services = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [showAll, setShowAll] = useState(false);
	const displayedServices = showAll ? services : services.slice(0, 3);

	return (
		<section
			id="services"
			className="py-24 bg-muted/30 relative overflow-hidden"
		>
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center gap-3 mb-3">
						<span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
							Since 2013
						</span>
						<span className="text-sm text-muted-foreground">
							Delivering aircraft & OOH advertising across India for 10+ years
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4 px-4">
						THE HOUSE OF ADVERTISING
						<br />
						<span className="text-gradient-sky">
							13 INTEGRATED SOLUTIONS
						</span>
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
						Aircraft branding to digital billboards, metro advertising to TV production — 
						complete 360° advertising solutions exclusively for Hyderabad, India.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{displayedServices.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<Card className="group overflow-hidden h-full hover:shadow-premium transition-all duration-500 bg-card border-border/50 hover:border-primary/30">
								<div
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === "Enter")
											document
												.getElementById("contact")
												?.scrollIntoView({ behavior: "smooth" });
									}}
									onClick={() => {
										document
											.getElementById("contact")
											?.scrollIntoView({ behavior: "smooth" });
									}}
									aria-label={`${service.title} - Learn more and get a quote`}
								>
									<div className="relative h-56 overflow-hidden">
										<img
											src={service.image}
											alt={`${service.title} example`}
											loading="lazy"
											decoding="async"
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
										<div className="absolute top-4 left-4">
											<span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
												{service.category}
											</span>
										</div>
										<div className="absolute bottom-4 left-4">
											<service.icon className="w-10 h-10 text-accent drop-shadow-lg" />
										</div>
									</div>

									<div className="p-5">
										<h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
											{service.title}
										</h3>
										<p className="text-sm text-muted-foreground mb-3 line-clamp-2">
											{service.description}
										</p>

										<ul className="space-y-1.5 mb-3">
											{service.features.map((feature) => (
												<li key={feature} className="flex items-center text-sm">
													<span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
													{feature}
												</li>
											))}
										</ul>

										<div className="flex gap-2 mt-3">
											<a
												href="#contact"
												className="flex-1 text-center px-3 py-2 rounded-md bg-primary/90 hover:bg-primary text-primary-foreground text-xs font-semibold shadow-sm hover:shadow-md transition-all"
												data-analytics={`service-quote-${service.title
													.replace(/\s+/g, "-")
													.toLowerCase()}`}
											>
												Get Quote
											</a>
											<a
												href="#roi"
												className="flex-1 text-center px-3 py-2 rounded-md border border-border hover:border-primary bg-background/50 text-foreground text-xs font-semibold hover:bg-accent/10 transition-all"
												data-analytics={`service-roi-${service.title
													.replace(/\s+/g, "-")
													.toLowerCase()}`}
											>
												Calculate ROI
											</a>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Load More Button */}
				{!showAll && services.length > 3 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-12 text-center"
					>
						<Button
							onClick={() => setShowAll(true)}
							size="lg"
							className="group bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-bold px-8 py-6 text-lg rounded-full shadow-premium hover:shadow-gold transition-all duration-300 transform hover:scale-105"
						>
							<span className="flex items-center gap-3">
								Load More Services
								<motion.div
									animate={{ y: [0, 4, 0] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								>
									<TrendingUp className="w-5 h-5" />
								</motion.div>
							</span>
						</Button>
						<p className="text-sm text-muted-foreground mt-4">
							Discover {services.length - 3} more advertising solutions
						</p>
					</motion.div>
				)}
			</div>
		</section>
	);
};
