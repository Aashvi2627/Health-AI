"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import { AlertTriangle, ArrowRight, Info } from "lucide-react"

const Results = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [predictions, setPredictions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch predictions from an API based on selected symptoms
    // For now, we'll simulate a delay and generate mock predictions
    const timer = setTimeout(() => {
      // Mock predictions based on selected symptoms
      const mockPredictions = [
        {
          disease: "Common Cold",
          confidence: 87,
          advice: "Rest, stay hydrated, and take over-the-counter cold medications if needed.",
        },
        {
          disease: "Seasonal Allergies",
          confidence: 65,
          advice: "Try antihistamines and avoid allergen exposure. Consider consulting an allergist.",
        },
        {
          disease: "Viral Sinusitis",
          confidence: 42,
          advice: "Use saline nasal sprays, rest, and stay hydrated. Consult a doctor if symptoms persist.",
        },
      ]

      setPredictions(mockPredictions)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [location.state])

  if (loading) {
    return (
      <PageTransition>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="mb-4">
              <motion.div
                className="h-16 w-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Analyzing Your Symptoms</h2>
            <p className="text-gray-400">
              Our AI is processing your symptoms to provide the most accurate assessment...
            </p>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Health Assessment
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Based on your symptoms, here are the most likely conditions
          </motion.p>
        </div>

        <motion.div
          className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4 mb-8 flex items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AlertTriangle className="text-yellow-400 h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-yellow-400">Important Disclaimer</h3>
            <p className="text-sm text-gray-300">
              This assessment is not a medical diagnosis. Always consult with a healthcare professional for proper
              medical advice.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6 mb-10">
          {predictions.map((prediction, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{prediction.disease}</h3>
                <span className="text-lg font-bold text-yellow-400">{prediction.confidence}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <motion.div
                  className="bg-yellow-400 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${prediction.confidence}%` }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                />
              </div>

              <div className="flex items-start">
                <Info className="text-yellow-400 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{prediction.advice}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            onClick={() => navigate("/teleconsultation")}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Get Professional Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </PageTransition>
  )
}

export default Results
