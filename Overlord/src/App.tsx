import React, { useState } from 'react';
import { Scissors, User, UserCircle, Check, Loader2 } from 'lucide-react';

function App() {
  const [barber, setBarber] = useState('');
  const [client, setClient] = useState('');
  const [haircut, setHaircut] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const barberOptions = ['Ryan', 'Vitor', 'Marcondes'];

  const haircutOptions = [
    'Corte Social',
    'Corte Degrade',
    'Cabelo e Barba',
    'Barba',
    'Pigmentação'
  ];

  const handleSave = async () => {
    setIsSaving(true);
    setShowSuccess(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSaving(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-md p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800 border-b pb-4">
          Overlord
        </h1>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              <UserCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-600" />
              Barbeiro
            </label>
            <div className="grid grid-cols-3 gap-2">
              {barberOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setBarber(option)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
                    barber === option
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-600" />
              Cliente
            </label>
            <input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Nome do cliente"
            />
          </div>

          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-600" />
              Corte
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {haircutOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setHaircut(option)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
                    haircut === option
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all mt-4 sm:mt-6 shadow-lg text-sm sm:text-base ${
                isSaving ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSaving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Salvar'
              )}
            </button>

            {showSuccess && (
              <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center text-green-600 font-medium animate-fade-in">
                <Check className="w-5 h-5 mr-2" />
                <span>Salvo com sucesso!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
