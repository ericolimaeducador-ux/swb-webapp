import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, MessageCircle, ArrowRight, BadgeCheck, Activity, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(38,208,164,0.18),_transparent_18%),linear-gradient(135deg,_#0a3f72_0%,_#062a4f_46%,_#041729_100%)]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-6%] top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-[-2%] h-96 w-96 rounded-full bg-[#00A878] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.75),transparent)]" />
      </div>

      <div className="section-frame relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#7EF0C8]" />
              <Shield className="w-4 h-4 text-[#00A878]" />
              <span className="text-sm font-medium text-white/90">Tecnologia em Proteção Sacral</span>
            </div>

            <h1 className="mb-6 max-w-3xl text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
