"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import PulsingBorderShader from "../../components/pulsing-border-shader"

export default function ArchitecturePage() {
  const router = useRouter()
  const [currentScene, setCurrentScene] = useState(1) // Start directly on architecture scene
  const [isTransitioning, setIsTransitioning] = useState(false)

  // No auto-advance - start directly with architecture

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient - Same as vision page */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <Button
          onClick={() => router.push('/?scene=2')}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              Under the Hood
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 relative z-10">
            <span className="text-purple-300 glow-text">Agentic AI</span> <span className="text-white">Architecture</span>
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-5xl mx-auto relative z-10 font-medium">
            Powered by the <span className="text-purple-300 particle-text-enhanced glow-text">National LLM</span>, this architecture enables sovereign AI capabilities for government operations with enterprise-grade security and compliance.
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
                {/* Very subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-2xl scale-110" />

                {/* Main shader component */}
                <div className="relative">
                  <PulsingBorderShader />
                </div>

                {/* Center text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white leading-tight">NATIONAL LLM</div>
                    <div className="text-sm text-purple-300 mt-1 leading-tight">Sovereign AI Foundation</div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce floating-dot-1" />
                <div className="absolute top-1/3 -left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce floating-dot-2" />
                <div className="absolute bottom-1/4 -right-12 w-4 h-4 bg-pink-400 rounded-full animate-bounce floating-dot-3" />
              </div>
            </div>
          </div>

          {/* Scene 1: Complete Architecture Layout */}
          <div className={`transition-all duration-1000 ${
            currentScene === 1 && !isTransitioning
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95 absolute"
          }`}>
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Architecture Layout */}
              <div className="w-full max-w-7xl px-6">
                

                {/* Touchpoints Bar */}
                <div className="bg-gray-800/30 border-2 border-purple-500/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <div className="flex items-center justify-between relative">
                    {/* Connection line - 70% transparent */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-purple-400/10 z-0"></div>
                    
                    <div className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 relative z-10 border border-gray-600/50">MS Teams/Slack</div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 relative z-10 border border-gray-600/50">Voice</div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 relative z-10 border border-gray-600/50">Browsers</div>
                    <div className="bg-purple-600/80 px-4 py-2 rounded-full text-sm text-white font-medium relative z-10 glow-text border border-purple-400">Core AI</div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 relative z-10 border border-gray-600/50">Intranets</div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 relative z-10 border border-gray-600/50">Service Portals</div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 relative z-10 border border-gray-600/50">Apps</div>
                  </div>
                </div>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-12 gap-6">
                  
                  {/* Left Sidebar */}
                  <div className="col-span-3 space-y-6">
                    {/* Workflow Studio */}
                    <div className="bg-gray-800/30 border-2 border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-purple-300 font-semibold text-lg mb-4 text-center uppercase tracking-wide glow-text">Workflow Studio</h3>
                      <div className="bg-gray-700/30 p-3 rounded-lg mb-4 border-l-4 border-purple-400">
                        <p className="text-gray-300 text-sm">Grounds Agent in enterprise specific business process</p>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-blue-300 font-medium text-sm mb-3 uppercase tracking-wide">Forms/Slots</h4>
                        <div className="space-y-2">
                          <div className="bg-gray-700/30 p-2 rounded-lg text-xs text-gray-400 border-l-2 border-purple-400">Preset templates</div>
                          <div className="bg-gray-700/30 p-2 rounded-lg text-xs text-gray-400 border-l-2 border-purple-400">API integrations</div>
                          <div className="bg-gray-700/30 p-2 rounded-lg text-xs text-gray-400 border-l-2 border-purple-400">AI Workflows</div>
                        </div>
                      </div>
                    </div>

                    {/* Knowledge Management */}
                    <div className="bg-gray-800/30 border-2 border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-blue-300 font-semibold text-lg mb-4 text-center uppercase tracking-wide glow-text">Knowledge Management</h3>
                      <div className="bg-gray-700/30 p-3 rounded-lg border-l-4 border-blue-400">
                        <p className="text-gray-300 text-sm">Grounds Agent in enterprise knowledge</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Section */}
                  <div className="col-span-6 space-y-6">
                    
                    {/* Orchestrator */}
                    <div className="bg-gray-800/30 border-2 border-gray-600 rounded-2xl p-6 backdrop-blur-sm">
                      <h2 className="text-white font-semibold text-xl mb-6 text-center uppercase tracking-wide glow-text">Orchestrator</h2>
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-gray-700/30 p-3 rounded-lg text-center border border-gray-600">
                          <h4 className="text-blue-300 font-medium text-sm mb-1 glow-text">Understands</h4>
                          <p className="text-gray-400 text-xs">the request</p>
                        </div>
                        <div className="bg-gray-700/30 p-3 rounded-lg text-center border border-gray-600">
                          <h4 className="text-green-300 font-medium text-sm mb-1 glow-text">Make a</h4>
                          <p className="text-gray-400 text-xs">Smart Plan</p>
                        </div>
                        <div className="bg-gray-700/30 p-3 rounded-lg text-center border border-gray-600">
                          <h4 className="text-yellow-300 font-medium text-sm mb-1 glow-text">Assign Work</h4>
                          <p className="text-gray-400 text-xs">to Agents</p>
                        </div>
                        <div className="bg-gray-700/30 p-3 rounded-lg text-center border border-gray-600">
                          <h4 className="text-purple-300 font-medium text-sm mb-1 glow-text">Deliver Back</h4>
                          <p className="text-gray-400 text-xs">the Result</p>
                        </div>
                      </div>
                    </div>

                    {/* Agents Section */}
                    <div className="bg-gradient-to-br from-fuchsia-900/40 via-gray-800/30 to-fuchsia-900/25 border-2 border-fuchsia-500/30 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                      <h3 className="text-white font-semibold text-xl mb-4 text-center uppercase tracking-wide glow-text">Agents</h3>
                      <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
                        An AI Agent reads instructions, uses its memory and skills, and connects with apps to finish tasks. 
                        Acts like a digital teammate that handles specific jobs (e.g., help, finance, HR) and learns from feedback.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                          <h4 className="text-green-300 font-medium text-sm mb-3 uppercase tracking-wide glow-text">Skills</h4>
                          <div className="space-y-2">
                            <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-green-400">Workflow 1,2,3...n</div>
                            <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-green-400">MCP & A2A</div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                          <h4 className="text-blue-300 font-medium text-sm mb-3 uppercase tracking-wide glow-text">Memory</h4>
                          <div className="space-y-2">
                            <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-blue-400">Knowledge agent access</div>
                            <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-blue-400">Agent specific knowledge</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                        <h4 className="text-yellow-300 font-medium text-sm mb-3 text-center uppercase tracking-wide glow-text">Functional Agent</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-yellow-400">IT Support Agent</div>
                          <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-yellow-400">Account Receivables</div>
                          <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-yellow-400">Procurement Agent</div>
                          <div className="bg-gray-600/30 p-2 rounded text-xs text-gray-400 border-l-2 border-yellow-400">Payroll Specialist</div>
                        </div>
                      </div>
                    </div>

                    {/* Guardrails */}
                    <div className="bg-gradient-to-br from-red-900/40 via-gray-800/30 to-red-900/25 border-2 border-red-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
                      <h3 className="text-red-300 font-semibold text-xl mb-3 uppercase tracking-wide glow-text">Guardrails</h3>
                      <p className="text-gray-300 text-sm mb-4">Guardrails make sure AI follows rules, avoids mistakes, and doesn't say or do anything unsafe.</p>
                      <div className="flex justify-center gap-3 flex-wrap">
                        <div className="bg-gray-700/30 px-3 py-2 rounded-lg text-xs text-gray-400 border border-red-400/30">AI Content Safety</div>
                        <div className="bg-gray-700/30 px-3 py-2 rounded-lg text-xs text-gray-400 border border-red-400/30">Performance & Cost</div>
                        <div className="bg-gray-700/30 px-3 py-2 rounded-lg text-xs text-gray-400 border border-red-400/30">Ethics and Bias</div>
                        <div className="bg-gray-700/30 px-3 py-2 rounded-lg text-xs text-gray-400 border border-red-400/30">AI Trust & Safety</div>
                      </div>
                    </div>

                    {/* National LLM */}
                    <div className="bg-gradient-to-br from-purple-900/40 via-gray-800/30 to-purple-900/25 border-2 border-purple-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
                      <h3 className="text-purple-300 font-semibold text-xl mb-3 uppercase tracking-wide glow-text">National LLM</h3>
                      <p className="text-gray-300 text-sm mb-4">Sovereign AI foundation powering all government agents with secure, compliant, and specialized capabilities</p>
                    </div>

                    {/* Agentic Landing Zone */}
                    <div className="bg-gradient-to-br from-white/10 via-gray-800/30 to-white/5 border-2 border-white/30 rounded-2xl p-4 text-center backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <h3 className="text-white font-semibold text-lg mb-2 uppercase tracking-wide glow-text">Agentic Landing Zone</h3>
                      <p className="text-gray-300 text-xs mb-3">Secure deployment environment where AI agents are instantiated, configured, and managed</p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-700/30 p-2 rounded-lg border border-white/30">
                          <h4 className="text-gray-300 font-medium text-xs mb-1">Agent Registry</h4>
                          <p className="text-gray-400 text-xs">Catalog of available agents and their capabilities</p>
                        </div>
                        <div className="bg-gray-700/30 p-2 rounded-lg border border-white/30">
                          <h4 className="text-gray-300 font-medium text-xs mb-1">Configuration Manager</h4>
                          <p className="text-gray-400 text-xs">Agent setup, permissions, and policy assignment</p>
                        </div>
                        <div className="bg-gray-700/30 p-2 rounded-lg border border-white/30">
                          <h4 className="text-gray-300 font-medium text-xs mb-1">Deployment Pipeline</h4>
                          <p className="text-gray-400 text-xs">Automated agent provisioning and scaling</p>
                        </div>
                        <div className="bg-gray-700/30 p-2 rounded-lg border border-white/30">
                          <h4 className="text-gray-300 font-medium text-xs mb-1">Security Sandbox</h4>
                          <p className="text-gray-400 text-xs">Isolated testing environment for new agents</p>
                        </div>
                        <div className="bg-gray-700/30 p-2 rounded-lg border border-white/30">
                          <h4 className="text-gray-300 font-medium text-xs mb-1">Monitoring Hub</h4>
                          <p className="text-gray-400 text-xs">Real-time agent health and performance tracking</p>
                        </div>
                        <div className="bg-gray-700/30 p-2 rounded-lg border border-white/30">
                          <h4 className="text-gray-300 font-medium text-xs mb-1">Resource Pool</h4>
                          <p className="text-gray-400 text-xs">Compute, storage, and network resource allocation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="col-span-3 space-y-6">
                    {/* Observability */}
                    <div className="bg-gray-800/30 border-2 border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-green-300 font-semibold text-lg text-center uppercase tracking-wide glow-text">Observability & Governance</h3>
                    </div>

                    {/* Transparency Dashboard */}
                    <div className="bg-gray-800/30 border-2 border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
                      <h3 className="text-blue-300 font-semibold text-lg mb-4 text-center uppercase tracking-wide glow-text">Transparency Dashboard</h3>
                      <div className="space-y-2">
                        <div className="bg-gray-700/30 p-2 rounded-lg text-xs text-gray-400 border-l-2 border-blue-400">Knowledge Health Dashboard</div>
                        <div className="bg-gray-700/30 p-2 rounded-lg text-xs text-gray-400 border-l-2 border-blue-400">Analytics</div>
                        <div className="bg-gray-700/30 p-2 rounded-lg text-xs text-gray-400 border-l-2 border-blue-400">Helpdesk Insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - Same as vision page */}
      <style jsx>{`
        .floating-dot-1 {
          animation-delay: 0s;
          animation-duration: 3s;
        }
        .floating-dot-2 {
          animation-delay: 1s;
          animation-duration: 4s;
        }
        .floating-dot-3 {
          animation-delay: 2s;
          animation-duration: 2.5s;
        }
        .glow-text {
          text-shadow: 
            0 0 5px rgba(168, 85, 247, 0.8),
            0 0 10px rgba(168, 85, 247, 0.6),
            0 0 15px rgba(168, 85, 247, 0.4),
            0 0 20px rgba(168, 85, 247, 0.2);
        }

        .particle-text-enhanced {
          position: relative;
          display: inline-block;
        }

        .particle-text-enhanced::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: 
            radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.4) 0%, transparent 30%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 30%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 30%),
            radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 40%);
          animation: enhanced-particle-float 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes enhanced-particle-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-5px) rotate(1deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-5px) rotate(-1deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}
