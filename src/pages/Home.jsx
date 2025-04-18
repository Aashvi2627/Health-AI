"use client"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import { ArrowRight, Activity, Users, Clock } from "lucide-react"

const Home = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Activity className="h-8 w-8 text-yellow-400" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze symptoms to provide accurate health insights.",
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals from the comfort of your home.",
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-400" />,
      title: "Instant Results",
      description: "Get immediate health assessments and recommendations in seconds.",
    },
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-white">Transforming Healthcare </span>
            <span className="text-yellow-400">with AI</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Smart, Scalable Innovations for Accessible Healthcare
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button onClick={() => navigate("/symptom-checker")} className="btn-primary flex items-center mx-auto">
              Try Symptom Checker
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our AI-powered symptom checker provides quick and accurate health assessments to help you make informed
            decisions.
          </p>
          <button onClick={() => navigate("/symptom-checker")} className="btn-primary">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Home
