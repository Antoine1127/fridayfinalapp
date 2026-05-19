import React from 'react';
import coyo from '../assets/coyo.png';

export default function Page1() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-black rounded-4xl shadow-lg p-9 t">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 underline">
          HYPER
        </h1>

        <img src={coyo} alt="pic of the co man" />;
        

      </div>
    </div>
  );
}
