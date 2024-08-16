"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Be_Vietnam_Pro } from "next/font/google";
import { GenXYZ } from "@/components/companies/gen-xyz";
import { Balsamiq } from "@/components/companies/balsamiq";
import { CodeCrafters } from "@/components/companies/codecrafters";
import { Incogni } from "@/components/companies/incogni";
import { NordVPN } from "@/components/companies/nordvpn";
import { NordPass } from "@/components/companies/nordpass";
import { useInView } from "react-intersection-observer";

const BeVietnamProFont = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const teamMembers = [
  {
    name: "Mohit Srinivasan",
    position: "Hackathon Lead",
    avatar: "/team/MOHIT_SRINIVASAN.webp",
  },
  {
    name: "Malav Patel",
    position: "Hackathon Co-Lead",
    avatar: "/team/MALAV_PATEL.png",
  },
  {
    name: "Alexander Masin",
    position: "Logistics Lead",
    avatar: "/team/ALEXANDER_MASIN.jpg",
  },
  {
    name: "Ayushmaan Mukherjee",
    position: "Marketing Lead",
    avatar: "/team/AYUSHMAAN_MUKHERJEE.webp",
  },
  {
    name: "Abdullah Kamran",
    position: "Operations Lead",
    avatar: "/team/ABDULLAH_KAMRAN.jpg",
  },
];

const sponsorCompanies = [
  { name: "gen.xyz", Logo: GenXYZ },
  { name: "Balsamiq", Logo: Balsamiq },
  { name: "CodeCrafters", Logo: CodeCrafters },
  { name: "Incogni", Logo: Incogni },
  { name: "NordVPN", Logo: NordVPN },
  { name: "NordPass", Logo: NordPass },
];

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`bg-white text-black rounded-full font-light px-6 py-3 ${GeistSans.className} flex items-center justify-center overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: "200px" }} // Set a fixed width
    >
      <motion.div className="flex items-center justify-center w-full">
        <motion.span
          className="whitespace-nowrap"
          animate={{ x: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          I Am Interested
        </motion.span>
        <motion.div
          className="flex items-center ml-2"
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight size={20} />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default function Home() {
  const { scrollY } = useViewportScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, -200]);
  const contentY = useTransform(scrollY, [0, 500], ["100vh", "0vh"]);

  return (
    <div className="relative">
      {/* Introduction Section */}
      <section className="min-h-screen bg-[#005EFF] flex flex-col justify-between relative overflow-hidden py-8">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src="/branding/dither.png"
            alt="Background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-20 px-4 sm:px-8">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex justify-end space-x-2 mb-8"
          >
            <AnimatedButton />
            <motion.button
              className={`bg-transparent border border-white text-white rounded-full font-regular px-8 py-3 ${GeistSans.className}`}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        <div className="relative z-20 px-4 sm:px-8 flex-grow flex flex-col justify-center mb-[-30em] sm:mb-[-25em] md:mb-[-20em]">
          <motion.h1
            className="text-9xl sm:text-[10rem] mb-[-0.4em] sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[20rem] leading-none text-white font-pixeboy"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hack
          </motion.h1>
          <motion.h1
            className="text-9xl sm:text-[10rem] md:text-9xl lg:text-[10rem] xl:text-[20rem] leading-none text-white font-pixeboy"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Jersey
          </motion.h1>
        </div>

        <motion.div
          className="relative z-20 px-4 sm:px-8 mt-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p
            className={`text-lg sm:text-xl md:text-xl ${GeistSans.className} uppercase tracking-wide font-semibold text-white`}
          >
            A 24-hour hackathon for high schoolers, no matter your experience
          </p>
        </motion.div>
      </section>

      {/* New White Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center flex-col space-y-4 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              className={`${GeistMono.className} text-primary text-2xl font-semibold`}
            >
              // 01. OUR MISSION
            </p>
            <h1
              className={`${BeVietnamProFont.className} text-4xl md:text-5xl text-center font-bold text-black/95 tracking-tighter`}
            >
              We Value Real World Experience
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side - Avatar grid */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-8">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <AvatarItem key={index} member={member} />
                ))}
              </div>
              {teamMembers.length > 3 && (
                <div
                  className={`flex justify-center gap-8 mt-8 ${
                    teamMembers.length === 4 ? "ml-[16.666%]" : ""
                  }`}
                >
                  {teamMembers.slice(3).map((member, index) => (
                    <AvatarItem key={index + 3} member={member} />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TextContent />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center flex-col space-y-4 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              className={`${GeistMono.className} text-primary text-2xl font-semibold`}
            >
              // 02. OUR SPONSORS
            </p>
            <h1
              className={`${BeVietnamProFont.className} text-4xl md:text-5xl text-center font-bold text-black/95 tracking-tighter`}
            >
              Companies That Rock
            </h1>
          </motion.div>
        </div>

        <motion.div
          className="bg-[#005EFF] py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              {sponsorCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  className="w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] flex items-center justify-center p-4 rounded-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <company.Logo />
                </motion.div>
              ))}
            </div>
            <div
              className={`flex flex-col items-center justify-center mt-6 text-white/70 text-[1.5rem] ${BeVietnamProFont.className}`}
            >
              <p>Your name could be here! Contact us at</p>
              <p className="font-semibold">team@hackjersey.org</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center flex-col space-y-4 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              className={`${GeistMono.className} text-primary text-2xl font-semibold`}
            >
              // 03. OUR ORGANIZATION
            </p>
            <h1
              className={`${BeVietnamProFont.className} text-4xl md:text-5xl text-center font-bold text-black/95 tracking-tighter`}
            >
              Our Credibility
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Our Legal Status",
                description:
                  "hackJersey is a legal IRS tax-exempt 501(c)(3) nonprofit organization. We are fiscally sponsored by The Hack Foundation.",
              },
              {
                title: "Other Projects",
                description:
                  "Our parent organization, The Hack Foundation (aka Hack Club), has conducted a plethora of past events to empower high schoolers.",
              },
              {
                title: "Industry-Level Partnerships",
                description:
                  "We've partnered with industry leading companies to provide real-world insights and opportunities. These companies are the core of hackJersey, and what allows our hackathon to provide high quality experiences.",
              },
            ].map((card, index) => (
              <CredibilityCard
                key={index}
                title={card.title}
                description={card.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blue Footer */}
      <footer className="bg-[#005EFF] py-8">
        <div className="container mx-auto px-4">
          <p
            className={`${BeVietnamProFont.className} text-white text-center text-xl`}
          >
            Copyright ©️ hackJersey 2024. A 501(c)(3) nonprofit organization,
            fiscally sponsored by The Hack Foundation.
          </p>
        </div>
      </footer>
    </div>
  );
}

const AvatarItem = ({ member }: any) => (
  <div className="flex flex-col items-center">
    <motion.div
      className="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] relative mb-2 rounded-full overflow-hidden"
      whileHover={{
        boxShadow: "0 8px 30px rgba(0, 94, 255, 0.3)",
        transition: { duration: 0.2 },
      }}
    >
      <Image
        src={member.avatar}
        alt={member.name}
        fill
        className="rounded-full object-cover"
      />
    </motion.div>
    <p
      className={`${BeVietnamProFont.className} text-black text-center text-lg font-semibold`}
    >
      {member.name}
    </p>
    <p className={`${BeVietnamProFont.className} text-center text-gray-600`}>
      {member.position}
    </p>
  </div>
);

const TextContent = () => (
  <>
    <div>
      <h1 className="text-black/95 tracking-tighter font-semibold text-2xl">
        What do we do?
      </h1>
      <p className={`${GeistSans.className} text-black/90 text-lg mt-2 mb-4`}>
        We are a group of STEM enthusiasts who find that high schoolers are
        underrepresented in the STEM field. We hope to change that by
        introducing real-world concepts to high schoolers as a basis to help
        them achieve their goals in the future.
      </p>
    </div>

    <div className="mt-5">
      <h1 className="text-black/95 tracking-tighter font-semibold text-2xl">
        How do we do this?
      </h1>
      <p className={`${GeistSans.className} text-black/90 text-lg mt-2 mb-4`}>
        We partner with companies in order to host workshops for any high
        schooler to attend. Our goal is to make money never a limiting factor
        for greatness. We subsidize travel costs to our event through our grant
        program.
      </p>
    </div>

    <div className="mt-5">
      <h1 className="text-black/95 tracking-tighter font-semibold text-2xl">
        Why do we do this?
      </h1>
      <p className={`${GeistSans.className} text-black/90 text-lg mt-2 mb-4`}>
        We believe that all high schoolers, no matter their backgrounds, should
        have access to hands-on, real world experience in STEM fields.
      </p>
    </div>
  </>
);

const CredibilityCard = ({ title, description, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-[#F2F2F2] h-[26rem] w-[22rem] md:h-[25rem] md:w-[25rem] p-8 overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-[#005EFF]"
        initial={{ height: "100%", top: "100%" }}
        variants={{
          hover: { top: "0%", transition: { duration: 0.3 } },
        }}
      />
      <motion.h3
        className={`${BeVietnamProFont.className} text-2xl font-semibold mb-4 relative z-10 text-black/85 tracking-tighter`}
        variants={{
          hover: {
            color: "#FFFFFF",
            transition: { duration: 0.3 },
          },
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        className={`${GeistSans.className} text-[1.4rem] relative z-10 text-black`}
        variants={{
          hover: {
            color: "#FFFFFF",
            transition: { duration: 0.3 },
          },
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
