"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaEthereum } from "react-icons/fa"
import { SiCardano, SiBinance } from "react-icons/si"

export default function BlockchainDevCV() {
  const [prices, setPrices] = useState<{
    ethereum: number | null;
    cardano: number | null;
    binance: number | null;
  }>({
    ethereum: null,
    cardano: null,
    binance: null,
  })

  useEffect(() => {
    const fetchPrices = async () => {
      // Simulating API calls to get crypto prices
      const ethereumPrice = (3000 + Math.random() * 100).toFixed(2);
      const cardanoPrice = (1 + Math.random() * 0.2).toFixed(2);
      const binancePrice = (300 + Math.random() * 10).toFixed(2);

      setPrices({
        ethereum: parseFloat(ethereumPrice),
        cardano: parseFloat(cardanoPrice),
        binance: parseFloat(binancePrice),
      });
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 relative overflow-hidden">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            HUC
          </h1>
          <p className="text-xl text-gray-400">Blockchain Developer | Web3 Enthusiast</p>
          <div className="flex justify-center space-x-4 mt-4">
            <SocialLink
              href="https://www.linkedin.com/in/h%C3%A0-ph%C3%BAc-nguy%E1%BB%85n-84a685301/"
              icon={<FaLinkedin size={24} />}
            />
            <SocialLink href="https://github.com/Huc06" icon={<FaGithub size={24} />} />
            <SocialLink href="phuc92147@gmail.com" icon={<FaEnvelope size={24} />} />
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
          <p className="text-gray-300">
            Blockchain developer with outstanding achievements from multiple competitions and experience in developing
            Web3, NFT Marketplace, and GameFi projects. Proficient in blockchain technologies such as Ethereum, Cardano,
            Solidity, as well as frontend development with React.js/Next.js and backend with Node.js/NestJS. Passionate
            about building secure, scalable decentralized platforms with optimized user experiences.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Hackathon Projects</h2>
          <Timeline />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillBar skill="Solidity" percentage={95} />
            <SkillBar skill="Move" percentage={90} />
            <SkillBar skill="React.js & Next.js" percentage={92} />
            <SkillBar skill="Node.js" percentage={88} />
            <SkillBar skill="NFT & GameFi Development" percentage={93} />
            <SkillBar skill="Smart Contract Security" percentage={90} />
            <SkillBar skill="DApp Architecture" percentage={91} />
            <SkillBar skill="Web3 Integration" percentage={94} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Live Blockchain Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PriceCard
              name="Ethereum"
              price={prices.ethereum}
              icon={<FaEthereum className="text-blue-400" size={32} />}
            />
            <PriceCard name="Cardano" price={prices.cardano} icon={<SiCardano className="text-blue-400" size={32} />} />
            <PriceCard
              name="Binance Coin"
              price={prices.binance}
              icon={<SiBinance className="text-yellow-400" size={32} />}
            />
          </div>
        </section>

        <footer className="text-center text-gray-500 mt-16">
          <p>Preferred payment: USDT, USDC (ERC20, TRC20) | Weekly payments</p>
          <p className="mt-2">© 2025 HUC. All rights reserved.</p>
        </footer>
      </motion.div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      {icon}
    </a>
  )
}

function Timeline() {
  const projects = [
    {
      name: "Cardano_Manga",
      description: "Decentralized manga platform on Cardano blockchain.",
      achievement: "2nd place at Cardano competition.",
      icon: <SiCardano className="text-blue-400" size={24} />,
    },
    {
      name: "Movelazy",
      description:
        "An extension for Visual Studio Code allow use interface to execute Movement command without set up environment in local.",
      achievement: "2nd place at MOVEMENT VIETNAM HACKATHON.",
      icon: <FaEthereum className="text-purple-400" size={24} />,
    },
    {
      name: "PlaywithHUC",
      description: "Decentralized gaming platform on Ethereum.",
      achievement: "2nd place at Ancient8 competition on Ethereum.",
      icon: <FaEthereum className="text-green-400" size={24} />,
    },
  ]

  return (
    <div className="relative">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-8 flex"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
            {project.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            <p className="text-green-400">{project.achievement}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function PriceCard({ name, price, icon }: { name: string; price: number | null; icon: React.ReactNode }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-2xl font-bold text-green-400">{price ? `$${price.toFixed(2)}` : "Loading..."}</p>
    </div>
  )
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .absolute {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

