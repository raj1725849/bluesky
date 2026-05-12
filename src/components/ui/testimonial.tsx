"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

function ClientFeedback() {
    const testimonialRef = useRef<HTMLDivElement>(null);
    const { lang } = useLanguage();
  
    const revealVariants = {
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
      hidden: {
        filter: "blur(10px)",
        y: -20,
        opacity: 0,
      },
    };

    const reviews = [
      {
        name: "Vikram Mehta",
        role: "Investment Banker",
        text: "Blue-Sky Realtech made my property search in Noida effortless. Their transparency and local knowledge are unmatched in the NCR market.",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop"
      },
      {
        name: "Priya Sharma",
        role: "IT Professional",
        text: "The personalized service I received was incredible. They didn't just sell me a house; they helped me find a home for my family.",
        img: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop"
      },
      {
        name: "Rajesh Khanna",
        role: "Business Owner",
        text: "I've worked with many agencies, but Blue-Sky's speed and professional closure process saved me weeks of headache.",
        img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop"
      },
      {
        name: "Ananya Goel",
        role: "Architect",
        text: "Their portfolio features some of the most stunning designs in Noida. Their eye for quality is why I trust them with my investments.",
        img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop"
      },
      {
        name: "Sanjay Duggal",
        role: "NRI Investor",
        text: "As an NRI, I needed someone I could trust. Blue-Sky handled the entire legal process seamlessly while I was abroad.",
        img: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop"
      },
      {
        name: "Meera Nair",
        role: "Doctor",
        text: "Professional, punctual, and highly knowledgeable. They are definitely the go-to experts for premium real estate in Noida.",
        img: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop"
      }
    ];
  
  return (
    <main className="w-full bg-white">
      <section className="relative h-full container text-black mx-auto rounded-lg py-24 bg-white" ref={testimonialRef}>
        <article className="max-w-screen-md mx-auto text-center space-y-4 mb-16">
          <TimelineContent as="h1" className="font-playfair text-4xl md:text-6xl font-bold text-abyss" animationNum={0} customVariants={revealVariants} timelineRef={testimonialRef}>
            {lang === 'EN' ? "Voices of Trust" : "विश्वास की आवाज़ें"}
          </TimelineContent>
          <TimelineContent as="p" className="editorial-subheader !text-indigo/60" animationNum={1} customVariants={revealVariants} timelineRef={testimonialRef}>
            {lang === 'EN' ? "What our clients say about Blue-Sky Realtech" : "हमारे ग्राहक ब्लू-स्काई रियलटेक के बारे में क्या कहते हैं"}
          </TimelineContent>
        </article>

        <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full px-4 lg:px-12">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4 h-full">
            <TimelineContent animationNum={2} customVariants={revealVariants} timelineRef={testimonialRef} className="bg-abyss text-white rounded-[2rem] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between h-[350px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <p className="relative z-10 font-dm-sans text-lg italic leading-relaxed">"{reviews[0].text}"</p>
              <div className="relative z-10 flex items-center gap-4 mt-8">
                <Image src={reviews[0].img} alt={reviews[0].name} width={60} height={60} className="rounded-2xl object-cover h-14 w-14 shadow-xl" />
                <div>
                  <h4 className="font-playfair font-bold text-lg">{reviews[0].name}</h4>
                  <p className="editorial-subheader !text-white/40">{reviews[0].role}</p>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent animationNum={3} customVariants={revealVariants} timelineRef={testimonialRef} className="bg-indigo text-white rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[250px]">
              <p className="font-dm-sans text-lg italic leading-relaxed">"{reviews[1].text}"</p>
              <div className="flex items-center gap-4 mt-4">
                <Image src={reviews[1].img} alt={reviews[1].name} width={50} height={50} className="rounded-xl object-cover h-12 w-12" />
                <div>
                  <h4 className="font-playfair font-bold text-base">{reviews[1].name}</h4>
                  <p className="editorial-subheader !text-white/60 !text-[9px]">{reviews[1].role}</p>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4 h-full">
            <TimelineContent animationNum={4} customVariants={revealVariants} timelineRef={testimonialRef} className="bg-ice text-abyss rounded-[2rem] p-8 border border-indigo/10 relative overflow-hidden flex flex-col justify-between h-[300px]">
              <p className="font-dm-sans text-lg italic leading-relaxed">"{reviews[2].text}"</p>
              <div className="flex items-center gap-4 mt-8">
                <Image src={reviews[2].img} alt={reviews[2].name} width={60} height={60} className="rounded-2xl object-cover h-14 w-14" />
                <div>
                  <h4 className="font-playfair font-bold text-lg">{reviews[2].name}</h4>
                  <p className="editorial-subheader !text-abyss/40">{reviews[2].role}</p>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent animationNum={5} customVariants={revealVariants} timelineRef={testimonialRef} className="bg-sky text-white rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[300px]">
              <p className="font-dm-sans text-lg italic leading-relaxed">"{reviews[3].text}"</p>
              <div className="flex items-center gap-4 mt-8">
                <Image src={reviews[3].img} alt={reviews[3].name} width={60} height={60} className="rounded-2xl object-cover h-14 w-14" />
                <div>
                  <h4 className="font-playfair font-bold text-lg">{reviews[3].name}</h4>
                  <p className="editorial-subheader !text-white/60">{reviews[3].role}</p>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4 h-full">
            <TimelineContent animationNum={6} customVariants={revealVariants} timelineRef={testimonialRef} className="bg-indigo text-white rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between h-[250px]">
              <p className="font-dm-sans text-lg italic leading-relaxed">"{reviews[4].text}"</p>
              <div className="flex items-center gap-4 mt-4">
                <Image src={reviews[4].img} alt={reviews[4].name} width={50} height={50} className="rounded-xl object-cover h-12 w-12" />
                <div>
                  <h4 className="font-playfair font-bold text-base">{reviews[4].name}</h4>
                  <p className="editorial-subheader !text-white/60 !text-[9px]">{reviews[4].role}</p>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent animationNum={7} customVariants={revealVariants} timelineRef={testimonialRef} className="bg-abyss text-white rounded-[2rem] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between h-[350px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <p className="relative z-10 font-dm-sans text-lg italic leading-relaxed">"{reviews[5].text}"</p>
              <div className="relative z-10 flex items-center gap-4 mt-8">
                <Image src={reviews[5].img} alt={reviews[5].name} width={60} height={60} className="rounded-2xl object-cover h-14 w-14 shadow-xl" />
                <div>
                  <h4 className="font-playfair font-bold text-lg">{reviews[5].name}</h4>
                  <p className="editorial-subheader !text-white/40">{reviews[5].role}</p>
                </div>
              </div>
            </TimelineContent>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;
