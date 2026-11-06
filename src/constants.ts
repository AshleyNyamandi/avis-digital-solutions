import { Award, Camera, Clock, Cpu, KeyRound, Lock, Mail, Phone, Shield, ShieldAlert, ShieldCheck, Video, Wifi } from "lucide-react";
import type { Variants } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./components/Icons";

export const navLinks = [
    {label: "Home", href: "#home"},
    {label: "Services", href: "#services"},
    {label: "Portfolio", href: "#portfolio"},
    {label: "About", href: "#about"},
    {label: "FAQ", href: "#faq"},
    {label: "Contact", href: "#contact"},                
];

export  const socialLinks = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/share/1Es75Zrz2D/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@avizdigitalsoluti?_r=1&_t=ZS-9B7xbfC9uoW', label: 'Tiktok' },

  ];

// Replace with your actual object/array of image URLs
export const images: string[] = [
  "./images/image1.jpeg",
  "./images/image2.jpeg",
    "./images/image3.jpeg",
  "./images/image4.jpeg",
  "./images/image5.jpeg",
  "./images/image6.jpeg",
  "./images/image7.jpeg",           
];  



export const servicesLinks = [
  { name: 'CCTV Installation' },
  { name: 'Alarm Systems'},
  { name: 'Access Control'},
  { name: 'WiFi Solutions'},
  { name: 'Video / Audio Intercom'},
];

export const itemVariants: Variants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const stats = [
{ value: '6+', label: 'Projects Delivered', icon: ShieldCheck },
{ value: '100%', label: 'Client Satisfaction', icon: Award },
{ value: '2+', label: 'Years in Industry', icon: Clock },
];


export const services = [
  {
    slug: "cctv-installation",
    label: "CCTV Installation",
    description: "Professional CCTV installation and supply for homes and businesses. Protect what matters most with reliable, round-the-clock surveillance you can trust.",
    icon: Camera,
    tag: "Security"
  },
  {
    slug: "alarm-systems",
    label: "Alarm Systems",
    description: "Advanced perimeter defense and intrusion detection systems tailored for homes and business.",
    icon: ShieldAlert,
    tag: "Security"
  },
  {
    slug: "access-control",
    label: "Access Control",
    description: "Take full control of who enters your premises with advanced biometric and keycard systems. Secure your spaces, track every entry, and keep your people and assets protected.",
    icon: KeyRound,
    tag: "Technology"
  },
{
  slug: "wifi-solutions",
  label: "WiFi Solutions",
  description: "Stay connected everywhere with enterprise-grade WiFi design, installation, and optimization. Lightning-fast, dead-zone-free coverage that keeps your team, guests, and devices online without interruption.",
  icon: Wifi,
  tag: "Connectivity"
},
];

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };


export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

export const projects = [
{
    title: "Enterprise Surveillance System",
    category: "CCTV Installation",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    icon: Video,
},
{
    title: "Commercial Access Control",
    category: "Access Control",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    icon: Lock,
},
{
    title: "Smart Perimeter Alarm Setup",
    category: "Alarm Systems",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
},
{
    title: "Campus-Wide Fiber & WiFi",
    category: "WiFi Solutions",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    icon: Wifi,
},
{
    title: "High-Rise Video Intercom",
    category: "Video / Audio Intercom",
    image: "https://images.unsplash.com/photo-1520869578617-557561d7b114?auto=format&fit=crop&w=800&q=80",
    icon: Cpu,
}
];  

export  const contactCards = [
    {
      title: 'Phone Number',
      detail: '+263 784 403 879',
      subDetail: 'Mon - Fri, 8am - 5pm',
      icon: Phone,
    },
    {
      title: 'Email Address',
      detail: 'avizdigitalsolutions@gmail.com',
      subDetail: 'Online Support 24/7',
      icon: Mail,
    },
    // {
    //   title: 'WhatsApp',
    //   detail: '+263 77 123 4567',
    //   subDetail: 'Instant Chat Support',
    //   icon: MessageSquare,
    //   href: 'https://wa.me/263771234567',
    // },
    // {
    //   title: 'Social Media',
    //   detail: '@AvisDigitalSolutions',
    //   subDetail: 'Follow our updates',
    //   icon: Share2,
    //   href: '#',
    // },
  ];

export  const faqs = [
  {
    question: 'What is biometric access control?',
    answer:
      'Biometric access control uses unique physical traits such as fingerprints, facial recognition, or iris patterns to verify identity before granting entry. Unlike keycards or passwords, it can\'t be shared, lost, or forgotten, giving you tighter security and a full audit trail of who accessed your premises and when.',
  },
  {
    question: 'Do you provide intercom installation services?',
    answer:
      'Yes. We supply and install both audio and video intercom systems for homes, offices, apartment blocks, and gated communities. Whether you need a simple doorbell intercom or a multi-unit networked system, we handle the design, installation, and configuration end to end.',
  },
  {
    question: 'Do you provide after-sales technical support?',
    answer:
      'Absolutely. Every installation is backed by our after-sales support including system walkthroughs, maintenance checks, and a dedicated support line for troubleshooting. We want your security and connectivity systems to keep working long after we leave the site.',
  },
  {
    question: 'How long does a typical installation take?',
    answer:
      'Most standard installations (CCTV, access control, or WiFi setups) are completed within a day. Larger or multi-site projects are scoped individually, and we\'ll always give you a clear timeline upfront, no surprises.',
  },
  {
    question: 'Can you integrate different systems together?',
    answer:
      'Yes. We can integrate CCTV, access control, intercoms, and network infrastructure into a single cohesive setup, so you manage everything from one place. Integrated systems also enable powerful features like automatic camera alerts when an access point is triggered.',
  },
  {
    question: 'Do you offer maintenance and service contracts?',
    answer:
      'We do. Our maintenance plans include scheduled inspections, firmware and software updates, and priority response for any issues. It\'s the easiest way to keep your systems reliable and extend their lifespan.',
  },
];
