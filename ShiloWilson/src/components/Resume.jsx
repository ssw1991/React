function Resume() {
  return (
    <div className="w-full h-full">
      {/* Mobile: Download link */}
      <div className="md:hidden flex flex-col items-center justify-center p-8 space-y-4">
        <p className="text-center text-gray-700">View my resume:</p>
        <a 
          href="/resume_Wilson_Shilo.pdf" 
          download
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow transition-colors"
        >
          Download Resume (PDF)
        </a>
        <a 
          href="/resume_Wilson_Shilo.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Open in new tab
        </a>
      </div>

      {/* Desktop: Embedded PDF */}
      <div className="hidden md:block w-full h-[calc(100vh-200px)]">
        <embed src="/resume_Wilson_Shilo.pdf" type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default Resume;