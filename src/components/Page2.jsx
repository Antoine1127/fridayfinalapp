import React from "react";

export default function Page2() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Effects of Hyper-Individualism
        </h1>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            Increased loneliness due to reduced emphasis on community
          </li>
          <li>
            Pressure to succeed without support systems
          </li>
          <li>
            Reduced empathy toward others’ struggles
          </li>
          <li>
            Overemphasis on personal achievement and competition
          </li>
        </ul>

        <div className="mt-6 bg-green-50 p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Reflection:</h2>
          <p>
            How often do you feel like you must handle everything alone?
          </p>
        </div>
      </div>
    </div>
  );
}
