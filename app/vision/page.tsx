"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import PulsingBorderShader from "../../components/pulsing-border-shader"

export default function VisionPage() {
  const router = useRouter()
  const [currentScene, setCurrentScene] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Auto-advance from scene 0 to scene 1 only once
    const timer = setTimeout(() => {
      if (currentScene === 0) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentScene(1)
          setIsTransitioning(false)
        }, 1000)
      }
    }, 4000)

    return () => clearTimeout(timer)
  }, [currentScene])

  // Normalized geometry (R = 100, center at 0,0)
  const scale = 5.2 // Bigger scale for larger ring
  const R = 100 * scale
  const centerX = 500 // Centered in wider viewBox
  const centerY = 380 // Moved down to prevent top cutting
  
  // Radii - Smaller circle with better quadrant spacing
  const r_core = 34 * scale // Core radius
  const r_inner_in = 42 * scale // Inner ring 
  const r_inner_out = 60 * scale // Inner ring for integrated content
  const r_outer_in = 68 * scale // Outer ring
  const r_outer_out = 88 * scale // Outer ring - smaller but with proper spacing
  const r_inner_label = 51 * scale // Mid-radius of inner ring
  const r_inner_label2 = 47 * scale // For subtitles
  const r_inner_label3 = 46 * scale // Slightly more distance from Citizen AI Agents
  const r_outer_title = 78 * scale // Mid-radius of outer ring
  const r_outer_examples = 75 * scale // Examples radius - closer to titles

  // Colors (matching spinning circle palette)
  const brightPurple = '#5800FF' // Main purple from PulsingBorderShader
  const lightBlue = '#BEECFF' // Light blue from PulsingBorderShader  
  const hotPink = '#E77EDC' // Pink from PulsingBorderShader
  const brightRed = '#FF4C3E' // Red from PulsingBorderShader
  const brightOrange = '#FF8C00' // Orange for Gov. AI Colleagues
  const microsoftBlue = '#0078D4' // Microsoft blue for Government AI Colleagues
  const white = '#FFFFFF'

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => router.push('/?scene=2')} className="text-white hover:bg-white/10 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="text-center mb-16 relative">
          {/* Background glow effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-3xl rounded-full opacity-80" />
          
          <div className="flex flex-col items-center gap-3 mb-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              The Vision
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 relative z-10">
            One Citizen, One digital concierge<br />
            <span className="text-purple-300 glow-text">Government at Digital Speed</span>
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-5xl mx-auto relative z-10 font-medium">
            This vision presents a Government Agentic AI Workforce powered by the National LLM, seamlessly blending citizen-facing agents with public service colleagues. It enables faster, more trusted services, greater efficiency across ministries, and a truly inclusive digital ecosystem for all.
          </p>
        </div>

        {/* Scene Container */}
        <div className="relative w-full h-screen flex items-center justify-center">
          
          {/* Scene 0: Just the Animated Circle */}
          <div className={`transition-all duration-1000 ${
            currentScene === 0 && !isTransitioning
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95 absolute"
          }`}>
            <div className="flex justify-center items-center transform -translate-y-60 -translate-x-4">
              <div className="relative">
                {/* Glow effect behind the shader */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl scale-150" />

                {/* Main shader component */}
                <div className="relative">
                  <PulsingBorderShader />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce floating-dot-1" />
                <div className="absolute top-1/3 -left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce floating-dot-2" />
                <div className="absolute bottom-1/4 -right-12 w-4 h-4 bg-pink-400 rounded-full animate-bounce floating-dot-3" />
              </div>
            </div>
          </div>

          {/* Scene 1: Complete Structured Diagram */}
          <div className={`transition-all duration-1000 ${
            currentScene === 1 && !isTransitioning
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95 absolute"
          }`}>
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Main Circular Diagram */}
              <div className="relative">
                <svg width="100%" height="90vh" viewBox="0 0 1000 900" className="relative z-10 max-w-6xl mx-auto">
                  {/* Background glow */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    {/* INNER RING CURVED TEXT PATHS */}
                    <path id="arc-inner-top" d={`M ${centerX - r_inner_label} ${centerY} A ${r_inner_label} ${r_inner_label} 0 0 1 ${centerX + r_inner_label} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-inner-top-2" d={`M ${centerX - r_inner_label3} ${centerY} A ${r_inner_label3} ${r_inner_label3} 0 0 1 ${centerX + r_inner_label3} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-inner-bottom" d={`M ${centerX + r_inner_label} ${centerY} A ${r_inner_label} ${r_inner_label} 0 0 1 ${centerX - r_inner_label} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-inner-bottom-2" d={`M ${centerX + r_inner_label2} ${centerY} A ${r_inner_label2} ${r_inner_label2} 0 0 1 ${centerX - r_inner_label2} ${centerY}`} fill="none" pathLength="100" />
                    
                    {/* OUTER RING CURVED TEXT PATHS - 3 LEVELS PER QUADRANT */}
                    {/* NE quadrant */}
                    <path id="arc-outer-NE-title" d={`M ${centerX} ${centerY - r_outer_title} A ${r_outer_title} ${r_outer_title} 0 0 1 ${centerX + r_outer_title} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-outer-NE-ex" d={`M ${centerX} ${centerY - r_outer_examples} A ${r_outer_examples} ${r_outer_examples} 0 0 1 ${centerX + r_outer_examples} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-outer-NE-ex2" d={`M ${centerX} ${centerY - (r_outer_examples - 14)} A ${r_outer_examples - 14} ${r_outer_examples - 14} 0 0 1 ${centerX + (r_outer_examples - 14)} ${centerY}`} fill="none" pathLength="100" />
                    
                    {/* NW quadrant */}
                    <path id="arc-outer-NW-title" d={`M ${centerX - r_outer_title} ${centerY} A ${r_outer_title} ${r_outer_title} 0 0 1 ${centerX} ${centerY - r_outer_title}`} fill="none" pathLength="100" />
                    <path id="arc-outer-NW-ex" d={`M ${centerX - r_outer_examples} ${centerY} A ${r_outer_examples} ${r_outer_examples} 0 0 1 ${centerX} ${centerY - r_outer_examples}`} fill="none" pathLength="100" />
                    <path id="arc-outer-NW-ex2" d={`M ${centerX - (r_outer_examples - 14)} ${centerY} A ${r_outer_examples - 14} ${r_outer_examples - 14} 0 0 1 ${centerX} ${centerY - (r_outer_examples - 14)}`} fill="none" pathLength="100" />
                    
                    {/* SW quadrant */}
                    <path id="arc-outer-SW-title" d={`M ${centerX} ${centerY + r_outer_title} A ${r_outer_title} ${r_outer_title} 0 0 1 ${centerX - r_outer_title} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-outer-SW-ex" d={`M ${centerX} ${centerY + r_outer_examples} A ${r_outer_examples} ${r_outer_examples} 0 0 1 ${centerX - r_outer_examples} ${centerY}`} fill="none" pathLength="100" />
                    <path id="arc-outer-SW-ex2" d={`M ${centerX} ${centerY + (r_outer_examples - 14)} A ${r_outer_examples - 14} ${r_outer_examples - 14} 0 0 1 ${centerX - (r_outer_examples - 14)} ${centerY}`} fill="none" pathLength="100" />
                    
                    {/* SE quadrant */}
                    <path id="arc-outer-SE-title" d={`M ${centerX + r_outer_title} ${centerY} A ${r_outer_title} ${r_outer_title} 0 0 1 ${centerX} ${centerY + r_outer_title}`} fill="none" pathLength="100" />
                    <path id="arc-outer-SE-ex" d={`M ${centerX + r_outer_examples} ${centerY} A ${r_outer_examples} ${r_outer_examples} 0 0 1 ${centerX} ${centerY + r_outer_examples}`} fill="none" pathLength="100" />
                    <path id="arc-outer-SE-ex2" d={`M ${centerX + (r_outer_examples - 14)} ${centerY} A ${r_outer_examples - 14} ${r_outer_examples - 14} 0 0 1 ${centerX} ${centerY + (r_outer_examples - 14)}`} fill="none" pathLength="100" />
                  </defs>

                  {/* OUTER RING QUADRANTS WITH FILLS */}
                  {/* NE quadrant - Light Blue */}
                  <path d={`M ${centerX} ${centerY - r_outer_out} A ${r_outer_out} ${r_outer_out} 0 0 1 ${centerX + r_outer_out} ${centerY} L ${centerX + r_outer_in} ${centerY} A ${r_outer_in} ${r_outer_in} 0 0 0 ${centerX} ${centerY - r_outer_in} Z`} 
                        fill={`${lightBlue}0D`} stroke={lightBlue} strokeWidth="2" filter="url(#glow)" />
                  
                  {/* NW quadrant - Bright Purple */}
                  <path d={`M ${centerX - r_outer_out} ${centerY} A ${r_outer_out} ${r_outer_out} 0 0 1 ${centerX} ${centerY - r_outer_out} L ${centerX} ${centerY - r_outer_in} A ${r_outer_in} ${r_outer_in} 0 0 0 ${centerX - r_outer_in} ${centerY} Z`} 
                        fill={`${brightPurple}0D`} stroke={brightPurple} strokeWidth="2" filter="url(#glow)" />
                  
                  {/* SW quadrant - Hot Pink */}
                  <path d={`M ${centerX} ${centerY + r_outer_out} A ${r_outer_out} ${r_outer_out} 0 0 1 ${centerX - r_outer_out} ${centerY} L ${centerX - r_outer_in} ${centerY} A ${r_outer_in} ${r_outer_in} 0 0 0 ${centerX} ${centerY + r_outer_in} Z`} 
                        fill={`${hotPink}0D`} stroke={`${hotPink}4D`} strokeWidth="2" filter="url(#glow)" />
                  
                  {/* SE quadrant - Bright Red */}
                  <path d={`M ${centerX + r_outer_out} ${centerY} A ${r_outer_out} ${r_outer_out} 0 0 1 ${centerX} ${centerY + r_outer_out} L ${centerX} ${centerY + r_outer_in} A ${r_outer_in} ${r_outer_in} 0 0 0 ${centerX + r_outer_in} ${centerY} Z`} 
                        fill={`${brightRed}0D`} stroke={brightRed} strokeWidth="2" filter="url(#glow)" />

                  {/* INNER RING HALVES WITH FILLS */}
                  {/* Top half-circle - White (Citizen AI Agents) */}
                  <path d={`M ${centerX - r_inner_out} ${centerY} A ${r_inner_out} ${r_inner_out} 0 0 1 ${centerX + r_inner_out} ${centerY} L ${centerX + r_inner_in} ${centerY} A ${r_inner_in} ${r_inner_in} 0 0 0 ${centerX - r_inner_in} ${centerY} Z`} 
                        fill={`${white}0D`} stroke={white} strokeWidth="2" filter="url(#glow)" />
                  
                  {/* Bottom half-circle - Microsoft Blue (Government AI Colleagues) */}
                  <path d={`M ${centerX + r_inner_out} ${centerY} A ${r_inner_out} ${r_inner_out} 0 0 1 ${centerX - r_inner_out} ${centerY} L ${centerX - r_inner_in} ${centerY} A ${r_inner_in} ${r_inner_in} 0 0 0 ${centerX + r_inner_in} ${centerY} Z`} 
                        fill={`${microsoftBlue}0D`} stroke={microsoftBlue} strokeWidth="2" filter="url(#glow)" />

                  {/* GLOWING RING STROKES */}
                  <circle cx={centerX} cy={centerY} r={r_inner_in} fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" filter="url(#glow)" />
                  <circle cx={centerX} cy={centerY} r={r_inner_out} fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" filter="url(#glow)" />
                  <circle cx={centerX} cy={centerY} r={r_outer_in} fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" filter="url(#glow)" />
                  <circle cx={centerX} cy={centerY} r={r_outer_out} fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" filter="url(#glow)" />
                  
                  {/* CROSSHAIR DIVIDER LINES */}
                  <line x1={centerX} y1={centerY - r_outer_out} x2={centerX} y2={centerY + r_outer_out} stroke={brightPurple} strokeWidth="2" filter="url(#glow)" />
                  <line x1={centerX - r_outer_out} y1={centerY} x2={centerX + r_outer_out} y2={centerY} stroke={brightPurple} strokeWidth="2" filter="url(#glow)" />
                  
                  {/* INNER RING CURVED LABELS */}
                  {/* Top half - Citizen AI Agents */}
                  <text textAnchor="middle" letterSpacing="0.5px" className="text-lg font-bold" fill={white} filter="url(#glow)">
                    <textPath href="#arc-inner-top" startOffset="50%">Citizen AI Agents</textPath>
                  </text>
                  
                  {/* Citizen digital concierge subtitle */}
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-base font-semibold" fill={white} filter="url(#glow)">
                    <textPath href="#arc-inner-top-2" startOffset="50%">Citizen digital concierge</textPath>
                  </text>
                  
                  {/* Bottom half - Government AI Colleagues */}
                  <text textAnchor="middle" letterSpacing="0.5px" className="text-lg font-bold" fill={microsoftBlue} filter="url(#glow)">
                    <textPath href="#arc-inner-bottom" startOffset="50%">Government AI Colleagues</textPath>
                  </text>
                  
                  {/* Civil Augmentation (on smaller arc to avoid overlap) */}
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-base font-semibold" fill={white} filter="url(#glow)">
                    <textPath href="#arc-inner-bottom-2" startOffset="50%">Civil Augmentation</textPath>
                  </text>
                  
                  {/* INTEGRATED OUTER RING CONTENT */}
                  {/* NE quadrant - Public Services */}
                  <text textAnchor="middle" letterSpacing="0.5px" className="text-lg font-bold" fill={lightBlue} filter="url(#glow)">
                    <textPath href="#arc-outer-NE-title" startOffset="50%">Public Service Agents</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-base font-medium" fill={white}>
                    <textPath href="#arc-outer-NE-ex" startOffset="50%">Police • Immigration • Housing • Healthcare</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-sm font-medium" fill={lightBlue} opacity="0.9">
                    <textPath href="#arc-outer-NE-ex2" startOffset="50%">Instant service delivery in minutes, proactive alerts</textPath>
                  </text>
                  
                  {/* NW quadrant - Compliance & Licensing */}
                  <text textAnchor="middle" letterSpacing="0.5px" className="text-lg font-bold" fill={brightPurple} filter="url(#glow)">
                    <textPath href="#arc-outer-NW-title" startOffset="50%">Compliance & Licensing Hub</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-base font-medium" fill={white}>
                    <textPath href="#arc-outer-NW-ex" startOffset="50%">Tax Filing • Customs • Business Licensing</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-sm font-medium" fill={brightPurple} opacity="0.9">
                    <textPath href="#arc-outer-NW-ex2" startOffset="50%">ID renewal, document processing, specialized agents</textPath>
                  </text>
                  
                  {/* SW quadrant - Operations */}
                  <text textAnchor="middle" letterSpacing="0.5px" className="text-lg font-bold" fill={hotPink} filter="url(#glow)">
                    <textPath href="#arc-outer-SW-title" startOffset="50%">Operations & Casework</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-base font-medium" fill={white}>
                    <textPath href="#arc-outer-SW-ex" startOffset="50%">Approvals • Fraud Detection • Field Ops</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-sm font-medium" fill={hotPink} opacity="0.9">
                    <textPath href="#arc-outer-SW-ex2" startOffset="50%">Inclusive access from rural to urban centers</textPath>
                  </text>
                  
                  {/* SE quadrant - Data Ecosystem */}
                  <text textAnchor="middle" letterSpacing="0.5px" className="text-lg font-bold" fill={brightRed} filter="url(#glow)">
                    <textPath href="#arc-outer-SE-title" startOffset="50%">Cross-Ministry Data Hub</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-base font-medium" fill={white}>
                    <textPath href="#arc-outer-SE-ex" startOffset="50%">Secure Sharing • Cross-Ministry Efficiency</textPath>
                  </text>
                  <text textAnchor="middle" letterSpacing="0.8px" className="text-sm font-medium" fill={brightRed} opacity="0.9">
                    <textPath href="#arc-outer-SE-ex2" startOffset="50%">Digital ecosystems: license + insurance integration</textPath>
                  </text>
                </svg>

                {/* CENTER PULSING BORDER SHADER - CONCENTRIC (locked center with offset) */}
                <div className="absolute" style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(calc(-50% - 50px), calc(-50% - 130px))',
                  width: `${r_core * 2}px`, 
                  height: `${r_core * 2}px`
                }}>
                  <div className="relative w-full h-full">
                    {/* Perfectly sized animated circle to match core exactly */}
                    <div className="absolute inset-0" style={{transform: `scale(${(r_core * 2) / 535})`}}>
                      <PulsingBorderShader />
                    </div>
                    {/* Center text overlay - perfectly centered */}
                    <div className="absolute inset-0 flex items-center justify-center z-10" style={{transform: 'translate(60px, 50px)'}}>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white leading-tight">Government</div>
                        <div className="text-xl font-bold text-white leading-tight">Agentic AI Workforce</div>
                        <div className="text-sm text-purple-300 mt-1 leading-tight">Powered by the National LLM</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow: 
            0 0 10px rgba(168, 85, 247, 0.9),
            0 0 20px rgba(168, 85, 247, 0.7),
            0 0 30px rgba(168, 85, 247, 0.5),
            0 0 40px rgba(168, 85, 247, 0.3);
          animation: text-glow-pulse 4s ease-in-out infinite;
        }

        @keyframes text-glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(168, 85, 247, 0.9),
              0 0 20px rgba(168, 85, 247, 0.7),
              0 0 30px rgba(168, 85, 247, 0.5),
              0 0 40px rgba(168, 85, 247, 0.3);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(59, 130, 246, 1),
              0 0 25px rgba(59, 130, 246, 0.8),
              0 0 35px rgba(59, 130, 246, 0.6),
              0 0 45px rgba(59, 130, 246, 0.4);
          }
        }

        .floating-dot-1 {
          animation-delay: 0s;
        }

        .floating-dot-2 {
          animation-delay: 1s;
        }

        .floating-dot-3 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}