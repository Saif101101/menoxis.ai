"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import NewCategory from "@/components/NewCategory";
import AnimatedStory from "@/components/AnimatedStory";
import TodayVsMenoxis from "@/components/TodayVsMenoxis";
import WhatChanges from "@/components/WhatChanges";
import IntelligenceLayer from "@/components/IntelligenceLayer";
import WhyItMatters from "@/components/WhyItMatters";
import AIKnowsBusiness from "@/components/AIKnowsBusiness";
import TheFuture from "@/components/TheFuture";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import VideoModal from "@/components/VideoModal";

export default function Page() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const openDemo = useCallback(() => setDemoOpen(true), []);
  const openVideo = useCallback(() => setVideoOpen(true), []);

  return (
    <main>
      <Navbar onRequestDemo={openDemo} />

      <Hero onRequestDemo={openDemo} onWatch={openVideo} />
      <Challenge />
      <NewCategory />
      <AnimatedStory />
      <TodayVsMenoxis />
      <WhatChanges />
      <IntelligenceLayer />
      <WhyItMatters />
      <AIKnowsBusiness />
      <TheFuture onRequestDemo={openDemo} />
      <Footer onRequestDemo={openDemo} />

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </main>
  );
}
