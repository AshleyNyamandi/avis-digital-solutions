import { Award, Camera, Clock, Cpu, KeyRound, Lock, Mail, Phone, PhoneCall, Shield, ShieldAlert, ShieldCheck, Video, Wifi } from "lucide-react";
import type { Variants } from 'motion/react';

export const navLinks = [
    {label: "Home", href: "#home"},
    {label: "Services", href: "#services"},
    {label: "Portfolio", href: "#portfolio"},
    {label: "About", href: "#about"},
    {label: "Contact", href: "#contact"},                
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
    description: "High-definition surveillance cameras with remote monitoring and smart detection features.",
    longDescription: "CCTV (Closed-Circuit Television) installation is the process of strategically placing, mounting, and configuring video surveillance cameras along with their supporting infrastructure—such as cabling, power supplies, recorders (DVRs/NVRs), monitors, and network connections—to monitor and record activity in a given area. A proper installation begins with a site survey to identify vulnerable entry points, high-traffic zones, blind spots, and lighting conditions, followed by selecting the right camera types (dome, bullet, PTZ, or fisheye), resolutions, and features like night vision, motion detection, and two-way audio. Technicians then run wiring or set up wireless connections, mount cameras at optimal heights and angles, configure recording and storage settings, and integrate the system with mobile apps or remote monitoring platforms for real-time viewing and playback. CCTV installation is important because it provides continuous, verifiable visual evidence that deters criminal activity, assists law enforcement investigations, and helps resolve disputes by documenting events as they happen. It also enhances safety in homes, businesses, schools, and public spaces by enabling real-time monitoring of employees, visitors, and assets, improving operational efficiency, and reducing losses from theft or vandalism. When installed correctly, a CCTV system becomes a reliable, always-watchful layer of security that complements alarm systems and gives owners confidence that their property and loved ones are protected around the clock.",
    icon: Camera,
    tag: "Security"
  },
  {
    slug: "alarm-systems",
    label: "Alarm Systems",
    description: "Advanced perimeter defense and intrusion detection systems tailored for homes and business.",
    longDescription:"Alarm systems are integrated networks of sensors, control panels, and alerting devices designed to detect unauthorized entry, environmental hazards, or emergencies and to trigger a timely response. They typically include components such as door and window contacts, motion detectors, glass-break sensors, smoke and carbon monoxide detectors, and panic buttons, all connected to a central hub that communicates with monitoring services, mobile apps, or local sirens. Alarm systems are critically important because they serve as both a deterrent and a first line of defense: the visible presence of security signage and cameras often discourages intruders before an incident occurs, while real-time alerts ensure that homeowners, businesses, and emergency responders are notified immediately when something goes wrong. Beyond burglary prevention, modern systems protect against fire, flooding, and medical emergencies, reducing property damage and saving lives by shortening response times. For businesses, they safeguard assets, sensitive data, and employee safety, and can lower insurance premiums. Ultimately, alarm systems provide peace of mind by converting unpredictable risks into manageable, monitored events, ensuring that help is on the way even when no one is present to call for it.",
    icon: ShieldAlert,
    tag: "Security"
  },
  {
    slug: "access-control",
    label: "Access Control",
    description: "Biometric and keycard systems to restrict and audit access to secure areas.",
    icon: KeyRound,
    longDescription: "Access control is a security system that regulates who can enter or exit a specific area, building, or resource, and under what conditions. It works by verifying credentials—such as key cards, fobs, PIN codes, biometric data (fingerprints, facial recognition, iris scans), or mobile credentials—before granting or denying access through doors, gates, turnstiles, or digital systems. A typical access control setup includes credential readers, electronic locks or magnetic strikes, door controllers, exit buttons, and a centralized management software platform that logs every entry and exit, assigns permission levels, and can generate real-time alerts or reports. Installation involves assessing the site's security needs, determining access zones and user groups, wiring readers and locks, integrating with alarm and CCTV systems, and configuring software rules such as time-based restrictions or multi-factor authentication. Access control is important because it replaces easily lost or copied mechanical keys with auditable, revocable digital credentials, giving organizations precise control over who goes where and when. It enhances security by preventing unauthorized entry, protects sensitive areas like server rooms, labs, cash offices, and data centers, and supports compliance with regulations in industries such as healthcare, finance, and government. It also improves safety by enabling rapid lockdowns during emergencies, tracking occupancy for fire evacuation, and maintaining a detailed audit trail for investigations. Beyond security, access control streamlines operations by automating attendance tracking, reducing administrative overhead, and integrating seamlessly with surveillance and alarm systems to create a layered, intelligent security ecosystem. Ultimately, it ensures that only the right people have access to the right places at the right times, protecting people, property, and information.",
    tag: "Technology"
  },
  {
    slug: "wifi-solutions",
    label: "WiFi Solutions",
    description: "Enterprise-grade wireless network design, setup, and optimization for seamless coverage.",
    icon: Wifi,
    longDescription: "In today's world, your WiFi is your business. Every transaction, every customer interaction, every cloud-based tool your team relies on runs through it, and when it fails, everything stops. A slow, unreliable, or insecure network doesn't just frustrate employees, it costs you sales, drives customers away, and opens doors to costly breaches. That's why investing in professional WiFi solutions isn't a luxury, it's a competitive necessity. Your customers expect it: Whether they're paying at a point-of-sale terminal, ordering from a tablet, or simply asking for the guest network, customers judge your business by its connectivity. Dead zones, buffering, and dropped connections send them straight to your competitors. Your operations depend on it: From inventory scanners and VoIP phones to cloud POS systems and video surveillance, your critical business tools demand a network that keeps up. A single outage during peak hours can mean lost revenue, idle staff, and angry customers. Your data must be protected: Consumer-grade routers weren't built for business threats. Enterprise-grade WiFi solutions deliver encrypted connections, secure guest isolation, and compliance-ready protections that keep customer data and company information out of the wrong hands. Your growth requires it: As you add devices, staff, locations, or IoT systems, your network needs to scale without re-engineering everything. Professional WiFi solutions grow with you, whether you're expanding a single store or managing a multi-site operation. Your bottom line benefits: Faster networks mean faster service, happier customers, more repeat business, and higher employee productivity. Add centralized management, analytics on foot traffic and usage patterns, and proactive monitoring, and your WiFi transforms from a cost center into a strategic asset. Don't let a cheap router hold your business back. Invest in WiFi solutions engineered for reliability, security, and scale, because in business, downtime isn't an option, and neither is second-rate connectivity.",
    tag: "Connectivity"
  },
  {
    slug: "intercom",
    label: "Video / Audio Intercom",
    description: "Modern entry gate and door intercom systems with clear audio and video streaming.",
    longDescription: "In any business, the moment someone arrives at your door, presses a button, or needs to reach you, that interaction matters. Miss it, delay it, or handle it poorly, and you lose trust, business, and sometimes safety. That's why a professional intercom system isn't just a convenience, it's a critical communication tool that keeps your people connected and your premises secure. Your front door is your first impression: Whether it's a customer, delivery driver, or job applicant, how quickly and clearly you respond says everything about how you operate. A modern intercom lets you see, hear, and speak to visitors instantly, from your desk, your phone, or anywhere in the world, so no one is ever left waiting or ignored. Your team needs to communicate across spaces: In warehouses, hospitals, schools, factories, and multi-floor offices, staff can't always walk to another department or shout across a room. Intercom systems provide instant, hands-free, or push-to-talk communication that keeps teams coordinated, speeds up workflows, and reduces miscommunication. Your security depends on controlled access: An intercom integrated with access control lets you verify and admit visitors without leaving your seat or buzzing in strangers blindly. Paired with CCTV, you get visual confirmation before granting entry, and a full log of who came, when, and who let them in. Your emergencies demand instant reach: When seconds count, intercoms serve as emergency call points for medical help, fire alerts, or security incidents. Two-way communication means responders and staff can coordinate immediately, rather than relying on phones that may be busy or unanswered. Your operations run smoother: From reception desks managing a steady flow of visitors, to production floors coordinating shifts, to parking gates and delivery bays, intercoms eliminate bottlenecks, reduce front-desk workload, and keep everything moving. Your investment pays off: One system can cover entry control, internal communication, emergency response, and visitor management, replacing multiple disjointed tools with a single, scalable solution that grows with your locations and needs. Don't leave your communication to chance or outdated buzzers. Invest in an intercom system built for clarity, security, and speed, because in business, being reachable isn't optional, and neither is being prepared.",
    icon: PhoneCall,
    tag: "Technology"
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
      detail: 'info@avisdigital.com',
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
