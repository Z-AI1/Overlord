import React, { useState } from 'react';
import { Scissors, User, UserCircle } from 'lucide-react';

function App() {
  const [barber, setBarber] = useState('');
  const [client, setClient] = useState('');
  const [haircut, setHaircut] = useState('');
  const [saved, setSaved] = useState(false); // Estado para controle da tela de confirmação

  const haircutOptions = [
    'Corte Social',
    'Corte Degrade',
    'Cabelo e Barba',
    'Barba',
    'Pigmentação'
  ];

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      {!saved ? (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 border-b pb-4">
            Overlord
          </h1>
          
          <div className="space-y-6">
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <UserCircle className="w-5 h-5 mr-2 text-gray-600" />
                Barbeiro
              </label>
              <input
                type="text"
                value={barber}
                onChange={(e) => setBarber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Nome do barbeiro"
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-5 h-5 mr-2 text-gray-600" />
                Cliente
              </label>
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Nome do cliente"
              />
            </div>

            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Scissors className="w-5 h-5 mr-2 text-gray-600" />
                Corte
              </label>
              <div className="grid grid-cols-2 gap-2">
                {haircutOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setHaircut(option)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
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

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mt-4 shadow-lg"
            >
              Salvar
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-green-500 text-white shadow-lg rounded-lg animate-fade-in text-center">
          <h2 className="text-xl font-bold">Salvo com sucesso! ✅</h2>
        </div>
      )}
    </div>
  );
}

export default App;
