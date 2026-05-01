import React from "react";

export default function Page1() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          What is Hyper-Individualism?
        </h1>

        <p className="mb-4 text-gray-700">
          Hyper-individualism is a cultural mindset that emphasizes extreme
          independence, personal success, and self-reliance above collective
          well-being.
        </p>

        <p className="mb-4 text-gray-700">
          While individuality can be empowering, hyper-individualism often
          discourages community support, collaboration, and shared
          responsibility.
        </p>

        <div className="bg-blue-50 p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Key Idea:</h2>
          <p>
            "I succeed or fail entirely on my own" — even when systems and
            communities play a major role.
          </p>
        </div>
      </div>
    </div>
  );
}