import React from "react";

export default function Page3() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">
          Finding Balance
        </h1>

        <p className="mb-4 text-gray-700">
          A healthy society balances individual freedom with collective care.
          You can value independence while still relying on and supporting
          others.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Build strong relationships and communities</li>
          <li>Ask for help when needed</li>
          <li>Support others’ growth and success</li>
          <li>Recognize systemic influences on outcomes</li>
        </ul>

        <div className="mt-6 bg-purple-50 p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Takeaway:</h2>
          <p>
            Independence is powerful—but connection is essential.
          </p>
        </div>
      </div>
    </div>
  );
}