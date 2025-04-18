import { Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} HackHype Health AI. All rights reserved.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-2 text-center md:text-left">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-2 py-1 text-xs bg-gray-800 rounded-md text-gray-300">React.js</span>
              <span className="px-2 py-1 text-xs bg-gray-800 rounded-md text-gray-300">TailwindCSS</span>
              <span className="px-2 py-1 text-xs bg-gray-800 rounded-md text-gray-300">Framer Motion</span>
              <span className="px-2 py-1 text-xs bg-gray-800 rounded-md text-gray-300">React Router DOM</span>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex justify-center md:justify-end">
            <a
              href="https://github.com/Aashvi2627/Disease-Detection-ML-Project-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="sr-only">GitHub repository</span>
              <div className="flex items-center">
                <Github size={20} />
                <span className="ml-2">GitHub Repo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
