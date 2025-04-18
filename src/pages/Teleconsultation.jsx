"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import { Calendar, Clock, CheckCircle2, User, Phone, Mail } from "lucide-react"

const Teleconsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "Dr. Sarah Johnson",
    date: "",
    time: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const doctors = ["Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Emily Rodriguez", "Dr. David Kim"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.time) newErrors.time = "Time is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // In a real app, you would submit the form data to an API
      setSubmitted(true)
    }
  }

  const prescriptionDetails = [
    { title: "Medications", content: "Antihistamine (10mg) - Take once daily for 7 days" },
    { title: "Lifestyle Tips", content: "Stay hydrated, get adequate rest, and avoid known allergens" },
    { title: "Test Suggestions", content: "Allergy panel recommended if symptoms persist beyond 2 weeks" },
  ]

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
            Teleconsultation
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Book an appointment with a healthcare professional
          </motion.p>
        </div>

        {!submitted ? (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prescription Details */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Prescription Details</h2>

              <div className="space-y-4">
                {prescriptionDetails.map((item, index) => (
                  <div key={index} className="border-b border-gray-800 pb-3 last:border-0 last:pb-0">
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Appointment Booking Form */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Book Appointment</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field pl-10 ${errors.name ? "border-red-500" : ""}`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field pl-10 ${errors.email ? "border-red-500" : ""}`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field pl-10 ${errors.phone ? "border-red-500" : ""}`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Select Doctor</label>
                  <select name="doctor" value={formData.doctor} onChange={handleChange} className="input-field">
                    {doctors.map((doctor, index) => (
                      <option key={index} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`input-field pl-10 ${errors.date ? "border-red-500" : ""}`}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`input-field pl-10 ${errors.time ? "border-red-500" : ""}`}
                      />
                    </div>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Book Appointment
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="card text-center py-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
              className="mx-auto mb-6 bg-green-500/20 p-4 rounded-full inline-block"
            >
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </motion.div>

            <h2 className="text-2xl font-bold mb-2">Appointment Confirmed!</h2>
            <p className="text-gray-400 mb-6">Your teleconsultation with {formData.doctor} is scheduled for:</p>

            <div className="bg-gray-800 rounded-lg p-4 max-w-sm mx-auto mb-6">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="font-medium">{formData.date}</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="font-medium">{formData.time}</span>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              We've sent a confirmation email to {formData.email} with all the details.
              <br />
              You'll receive a reminder 30 minutes before your appointment.
            </p>
          </motion.div>
        )}
      </div>
    </PageTransition>
  )
}

export default Teleconsultation
