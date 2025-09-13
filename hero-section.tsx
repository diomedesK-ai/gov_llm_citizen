"use client"

import { Button } from "@/components/ui/button"
import PulsingBorderShader from "./components/pulsing-border-shader"
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Component() {
  const [currentScene, setCurrentScene] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isManualNavigation, setIsManualNavigation] = useState(false)
  const router = useRouter()

  const goToScene = (sceneIndex: number) => {
    if (sceneIndex === currentScene || isTransitioning) return

    setIsManualNavigation(true)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScene(sceneIndex)
      setIsTransitioning(false)
      if (sceneIndex === 2) {
        setShowButton(true)
      }
    }, 500)
  }

  const goToPrevious = () => {
    if (currentScene > 0) {
      goToScene(currentScene - 1)
    }
  }

  const goToNext = () => {
    if (currentScene < 2) {
      goToScene(currentScene + 1)
    }
  }

  useEffect(() => {
    if (isManualNavigation) return

    const timers = [
      setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentScene(1)
          setIsTransitioning(false)
        }, 500) // 0.5s fade to black
      }, 3500), // Start transition at 3.5s

      setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentScene(2)
          setIsTransitioning(false)
        }, 500)
      }, 7500), // Start transition at 7.5s

      setTimeout(() => setShowButton(true), 10000), // Button after 10s
    ]

    return () => timers.forEach(clearTimeout)
  }, [isManualNavigation])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div
        className={`absolute inset-0 bg-black z-50 transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content with scene transitions */}
          <div className="space-y-8 lg:pr-8 relative">
            <div
              className={`transition-all duration-1000 ${
                currentScene === 0 && !isTransitioning
                  ? "opacity-100"
                  : "opacity-0 absolute"
              }`}
            >
              <div className="relative">
                {/* Macro glow layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl scale-150 rounded-full" />
                {/* Secondary accent glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 to-purple-500/15 blur-2xl scale-125 rounded-full" />
                
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight text-center lg:text-left relative z-10">
                  <span className="inline-block animate-fade-in-glow breathing-text">
                    <span className="text-purple-300 glow-text particle-text-enhanced">Imagine</span> if...
                  </span>
                </h1>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${
                currentScene === 1 && !isTransitioning
                  ? "opacity-100"
                  : "opacity-0 absolute"
              }`}
            >
              <div className="space-y-6 relative">
                {/* Macro glow layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl scale-150 rounded-full" />
                {/* Secondary accent glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 to-purple-500/15 blur-2xl scale-125 rounded-full" />
                
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight relative z-10 text-left pl-8 lg:pl-0">
                  <span className="typewriter-text text-white">
                    <span className="text-purple-300 particle-text-enhanced glow-text">Each</span> government
                    <br />
                    interaction felt
                    <br />
                    as <span className="text-purple-300 particle-text-enhanced glow-text">simple</span>
                    <br />
                    as a conversation?
                  </span>
                </h1>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${
                currentScene === 2 && !isTransitioning
                  ? "opacity-100"
                  : "opacity-0 absolute"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full scale-150" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6 relative z-10">
                <Sparkles className="w-4 h-4" />
                AI-Powered Personal Assistant
              </div>

              <div className="space-y-6 relative z-10">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                  If every citizen had their{" "}
                  <span className="text-purple-300 particle-text-enhanced glow-text">personal agent</span> and every employee a{" "}
                  <span className="text-purple-300 particle-text-enhanced glow-text">digital colleague</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-subtitle-fade">
                  A digital companion that understands your needs, navigates bureaucracy, and ensures your voice is
                  heard in government.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 pt-8 relative z-20 opacity-100 pointer-events-auto"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full group pulse-button relative z-30 pointer-events-auto"
                  onClick={() => router.push("/vision")}
                >
                  Explore the Vision
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full bg-transparent"
                >
                  Watch Demo
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full bg-transparent"
                >
                  Under the Hood
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available 24/7
                </div>
                <div>No setup required</div>
                <div>Enterprise ready</div>
              </div>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind the shader */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl scale-110" />

              {/* Main shader component */}
              <div className="relative">
                <PulsingBorderShader />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-1/3 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={goToPrevious}
          disabled={currentScene === 0}
          className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 ${
            currentScene === 0 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToScene(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentScene === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentScene === 2}
          className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 ${
            currentScene === 2 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100"
          }`}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <style jsx>{`
        @keyframes fade-in-glow {
          from {
            opacity: 0;
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            text-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(147, 51, 234, 0.3);
            transform: scale(1);
          }
        }

        .animate-fade-in-glow {
          animation: fade-in-glow 4s ease-in-out;
        }

        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
            text-shadow: 0 0 40px rgba(147, 51, 234, 0.8);
          }
          50% {
            transform: scale(1.02);
            text-shadow: 0 0 60px rgba(147, 51, 234, 1), 0 0 100px rgba(147, 51, 234, 0.5);
          }
        }

        .breathing-text {
          animation: breathing 3s ease-in-out infinite;
        }

        .typewriter-text {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typewriter 4s steps(60, end), blink-caret 0.75s step-end infinite;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: rgba(255, 255, 255, 0.8);
          }
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
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 30%),
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

        @keyframes subtitle-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-subtitle-fade {
          animation: subtitle-fade 1s ease-out 1s both;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.6), 0 0 40px rgba(59, 130, 246, 0.3);
          }
        }

        .pulse-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .glow-text {
          text-shadow: 
            0 0 10px rgba(168, 85, 247, 0.8),
            0 0 20px rgba(168, 85, 247, 0.6),
            0 0 30px rgba(168, 85, 247, 0.4),
            0 0 40px rgba(236, 72, 153, 0.3);
          animation: text-glow-pulse 3s ease-in-out infinite;
        }

        @keyframes text-glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(168, 85, 247, 0.8),
              0 0 20px rgba(168, 85, 247, 0.6),
              0 0 30px rgba(168, 85, 247, 0.4);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(168, 85, 247, 1),
              0 0 25px rgba(168, 85, 247, 0.8),
              0 0 35px rgba(168, 85, 247, 0.6),
              0 0 45px rgba(236, 72, 153, 0.4);
          }
        }

        .glow-text-citizens {
          color: #faf5ff;
          text-shadow: 
            0 0 10px rgba(168, 85, 247, 0.8),
            0 0 20px rgba(168, 85, 247, 0.6),
            0 0 30px rgba(168, 85, 247, 0.4),
            0 0 40px rgba(236, 72, 153, 0.3);
          animation: citizens-glow-pulse 3s ease-in-out infinite;
        }

        .glow-text-government {
          color: #faf5ff;
          text-shadow: 
            0 0 10px rgba(168, 85, 247, 0.8),
            0 0 20px rgba(168, 85, 247, 0.6),
            0 0 30px rgba(168, 85, 247, 0.4),
            0 0 40px rgba(236, 72, 153, 0.3);
          animation: government-glow-pulse 3s ease-in-out infinite 0.5s;
        }

        @keyframes citizens-glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(168, 85, 247, 0.8),
              0 0 20px rgba(168, 85, 247, 0.6),
              0 0 30px rgba(168, 85, 247, 0.4);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(168, 85, 247, 1),
              0 0 25px rgba(168, 85, 247, 0.8),
              0 0 35px rgba(168, 85, 247, 0.6),
              0 0 45px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes government-glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(168, 85, 247, 0.8),
              0 0 20px rgba(168, 85, 247, 0.6),
              0 0 30px rgba(168, 85, 247, 0.4);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(168, 85, 247, 1),
              0 0 25px rgba(168, 85, 247, 0.8),
              0 0 35px rgba(168, 85, 247, 0.6),
              0 0 45px rgba(236, 72, 153, 0.4);
          }
        }

        .glow-text-simple {
          color: #faf5ff;
          text-shadow: 
            0 0 10px rgba(168, 85, 247, 0.8),
            0 0 20px rgba(168, 85, 247, 0.6),
            0 0 30px rgba(168, 85, 247, 0.4);
          animation: simple-glow-pulse 3s ease-in-out infinite 1s;
        }

        @keyframes simple-glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(168, 85, 247, 0.8),
              0 0 20px rgba(168, 85, 247, 0.6),
              0 0 30px rgba(168, 85, 247, 0.4);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(168, 85, 247, 1),
              0 0 25px rgba(168, 85, 247, 0.8),
              0 0 35px rgba(168, 85, 247, 0.6),
              0 0 45px rgba(236, 72, 153, 0.4);
          }
        }
      `}</style>
    </div>
  )
}
