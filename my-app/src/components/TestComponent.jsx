import React from 'react';

const TestComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Abomiskah</h1>
        <p className="text-lg text-gray-600">Construction Company</p>
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;

