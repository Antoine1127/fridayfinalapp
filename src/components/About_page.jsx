import React from "react";

export default function Page1() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 t">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 underline">
         About Us
        </h1>

        <div className="ng-white border bg-blue-400 border-gray-200 rounded-xl shadow-md p-6 w-72 text-center hover:shadow-x1 hover:-translate-y-1 transition-all duration-200">
        <span className="text-5x1">😂</span>
          <h2 className="font-bold mb-2 ">Antoine</h2>
          <p>Coder</p>
          <p>write somthing here</p>

        </div>

        <div className="ng-white border bg-red-400 border-gray-200 rounded-xl shadow-md p-6 w-72 text-center hover:shadow-x1 hover:-translate-y-1 transition-all duration-200">
        <span className="text-5x1">😈</span>
          <h2 className="font-bold mb-2 ">Christean</h2>
          <p>coder & Designer</p>
          <p>Write something here</p>
        </div>

        
      
      

      </div>
    </div>
      );

      
    }