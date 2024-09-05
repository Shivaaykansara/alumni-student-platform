import { useState } from 'react';

const AiAssistant = () => {
  const [message, setMessage] = useState('');
  const [aiResponses, setAiResponses] = useState([]);

  const handleAskAi = () => {
    // Simulate AI response for demo purposes
    const response = `AI Analysis: The keyword "${message}" may indicate suspicious behavior.`;
    setAiResponses([...aiResponses, response]);
    setMessage('');
  };

  return (
    <div className="fixed bottom-0 border-4 border-blue-600 right-0 m-6 w-80 bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">AI Assistant</h2>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Ask AI..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAskAi}
          
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Ask
        </button>
      </div>
      <div className="space-y-2">
        {aiResponses.map((response, index) => (
          <p key={index} className="bg-gray-100 p-2 rounded-md">{response}</p>
        ))}
      </div>
    </div>
  );
};

export default AiAssistant;
