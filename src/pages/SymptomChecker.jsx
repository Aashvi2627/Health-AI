"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const SymptomChecker = () => {
  const navigate = useNavigate()
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [error, setError] = useState("")

  const symptoms = [
    { id: 1, name: "Fever" },
    { id: 2, name: "Cough" },
    { id: 3, name: "Headache" },
    { id: 4, name: "Fatigue" },
    { id: 5, name: "Shortness of breath" },
    { id: 6, name: "Sore throat" },
    { id: 7, name: "Muscle aches" },
    { id: 8, name: "Loss of taste or smell" },
    { id: 9, name: "Nausea" },
    { id: 10, name: "Diarrhea" },
    { id: 11, name: "Rash" },
    { id: 12, name: "Chest pain" },
  ]

  const toggleSymptom = (id) => {
    setSelectedSymptoms((prev) => (prev.includes(id) ? prev.filter((symptomId) => symptomId !== id) : [...prev, id]))
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedSymptoms.length === 0) {
      setError("Please select at least one symptom")
      return
    }

    // In a real app, you would send the selected symptoms to an API
    // For now, we'll just navigate to the results page
    navigate("/results", { state: { selectedSymptoms } })
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
            Symptom Checker
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Select all the symptoms you're experiencing to get a preliminary assessment
          </motion.p>
        </div>

        {error && (
          <motion.div
            className="bg-red-900/30 border border-red-500 text-red-300 px-4 py-3 rounded-md mb-6 flex items-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">Select Your Symptoms</h2>

            <div className="grid md:grid-cols-2 gap-2">
              {symptoms.map((symptom) => (
                <motion.div
                  key={symptom.id}
                  className={`checkbox-container ${
                    selectedSymptoms.includes(symptom.id) ? "bg-gray-800 border border-yellow-400" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <label className="flex items-center cursor-pointer w-full">
                    <input
                      type="checkbox"
                      className="checkbox-custom"
                      checked={selectedSymptoms.includes(symptom.id)}
                      onChange={() => toggleSymptom(symptom.id)}
                    />
                    <span className="ml-2">{symptom.name}</span>
                    {selectedSymptoms.includes(symptom.id) && (
                      <CheckCircle2 className="ml-auto h-5 w-5 text-yellow-400" />
                    )}
                  </label>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Predict My Condition
            </motion.button>
          </div>
        </form>

        <motion.div
          className="mt-12 p-6 bg-gray-900 rounded-xl border border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-medium mb-2">Important Note</h3>
          <p className="text-gray-400 text-sm">
            This symptom checker is for informational purposes only and is not a qualified medical opinion. Always
            consult with a healthcare professional for proper diagnosis and treatment.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default SymptomChecker
