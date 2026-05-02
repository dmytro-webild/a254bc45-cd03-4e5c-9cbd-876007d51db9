"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Landscaping & Tree Solutions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Expert Tree Care & Landscaping Solutions"
      description="Professional arborist services designed to keep your property safe, beautiful, and thriving all year round."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/female-gardener-s-hand-cutting-plant-with-secateurs_23-2148165259.jpg",
          imageAlt: "Professional tree service arborist climbing",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/focused-male-florist-standing-rows-with-potted-plants-cutting-bush-greenhouse-man-working-garden-growing-plants-pots-gardening-job-concept_74855-12788.jpg",
          imageAlt: "Expert tree trimming work outdoor",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/gardening-concept-with-man-planting_23-2148127860.jpg",
          imageAlt: "Tree service specialist pruning",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/climber-looking-his-carabiners_23-2147665142.jpg",
          imageAlt: "Tree removal safety gear",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/man-trimming-bough-brush-guy-works-backyard_1157-41446.jpg",
          imageAlt: "Tree care maintenance",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/inspired-bearded-male-gardener-shaping-spiral-from-thuja-hedge-by-trimming-outside-side-view_7502-10568.jpg",
          imageAlt: "Tree service professional trimming",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Decades of Excellence in Arboriculture"
      description="At Landscaping & Tree Service Solutions, we blend deep horticultural knowledge with modern safety standards. Our certified arborists ensure your trees are managed with precision, care, and long-term sustainability in mind."
      bulletPoints={[
        {
          title: "Certified Arborists",
          description: "Fully insured and ISA certified experts.",
        },
        {
          title: "Sustainable Practices",
          description: "Eco-friendly disposal and care methods.",
        },
        {
          title: "Precision Work",
          description: "Safe, clean, and efficient tree maintenance.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-park-rangers-woods_23-2149309593.jpg"
      imageAlt="Professional arborist talking to client"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Emergency Storm Cleanup",
          "Hazardous Tree Removal",
          "Root Structure Damage",
          "Pest Infestation Control",
          "Dead Branch Mitigation",
        ],
      }}
      positiveCard={{
        items: [
          "Expert Tree Pruning",
          "Professional Landscaping Design",
          "Fertilization and Soil Care",
          "Lawn Maintenance Programs",
          "Seasonal Planting Services",
        ],
      }}
      title="Our Specialized Tree & Landscaping Services"
      description="A comprehensive suite of solutions to elevate your property's exterior health and curb appeal."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "15+",
          title: "Years Experience",
          items: [
            "Industry standard expertise",
            "Qualified professionals",
          ],
        },
        {
          id: "m2",
          value: "100%",
          title: "Safety Guaranteed",
          items: [
            "Zero injury record",
            "Full insurance coverage",
          ],
        },
        {
          id: "m3",
          value: "5K+",
          title: "Happy Clients",
          items: [
            "Residential and commercial",
            "Recurring service trust",
          ],
        },
      ]}
      title="Proven Results & Safety Record"
      description="Quality tree care backed by experience and community trust."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Jenkins",
          handle: "@sarahj",
          testimonial: "Exceptional service, cleaned up everything perfectly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-her-kitchen_329181-20396.jpg",
        },
        {
          id: "2",
          name: "Mark Peterson",
          handle: "@mpeterson",
          testimonial: "Very professional and safe tree removal.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-brunette-woman-sunglasses-look-camera_197531-33795.jpg",
        },
        {
          id: "3",
          name: "Emily Watson",
          handle: "@emwatson",
          testimonial: "The best landscaping service in town hands down.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer_158595-6971.jpg",
        },
        {
          id: "4",
          name: "David Cho",
          handle: "@davidcho",
          testimonial: "Efficient, reliable, and very knowledgeable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-helping-each-other-community_23-2149139733.jpg",
        },
        {
          id: "5",
          name: "Linda Richards",
          handle: "@lrichards",
          testimonial: "Transformed our property, highly recommend them.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/city-park-china_1127-3633.jpg",
        },
      ]}
      showRating={true}
      title="Trusted by Local Homeowners"
      description="Don't just take our word for it—see what our satisfied clients say about our service."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Urban Landscape Hub",
        "Green City Initiative",
        "Property Managers Assoc",
        "Tree Care Professionals",
        "Local Gardeners Guild",
        "Safety Standards Org",
        "Green Earth Alliance",
      ]}
      title="Trusted By Organizations"
      description="We are proud to serve some of the area's top community organizations and commercial properties."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How often should trees be pruned?",
          content: "Generally, every 3-5 years, depending on tree species and age.",
        },
        {
          id: "q2",
          title: "Are you fully insured?",
          content: "Yes, we maintain comprehensive insurance for your safety and protection.",
        },
        {
          id: "q3",
          title: "What service areas do you cover?",
          content: "We cover the greater metropolitan and suburban regions.",
        },
        {
          id: "q4",
          title: "Do you provide emergency services?",
          content: "Yes, we offer 24/7 emergency response for storm damage and hazardous trees.",
        },
        {
          id: "q5",
          title: "How is cleanup handled?",
          content: "We utilize wood chippers and leave your property cleaner than we found it.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about our tree and landscape services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Let's Connect"
      title="Ready to Transform Your Landscape?"
      description="Contact us today for a free on-site consultation and estimate."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/smiling-couple-adventure-park_23-2147562501.jpg"
      logoText="Landscaping & Tree Solutions"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Tree Removal",
              href: "#features",
            },
            {
              label: "Landscaping",
              href: "#features",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
