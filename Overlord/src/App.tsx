import { useState } from 'react';
import { Scissors, User, UserCircle, Check, Loader2 } from 'lucide-react';

function App() {}
  const [barber, setBarber] = useState('');
  const [client, setClient] = useState('');
  const [haircut, setHaircut] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const barberOptions = ['Ryan', 'Vitor', 'Marcondes'];
  const haircutOptions = [
    'Corte Social',
    'Corte Degrade',
    'Cabelo e Barba',
    'Barba',
    'Pigmentação'
  ];

  const handleSave = async () => {
    if (!barber || !client || !haircut) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setIsSaving(true);
    setShowSuccess(false);
    setError('');

    try {
      const n8nWebhookUrl = 'https://dinastia-n8n-editor.v29lah.easypanel.host/webhook-test/comanda';
      
      // Criando um objeto de formatação de data
const options: Intl.DateTimeFormatOptions = { 
  timeZone: 'America/Sao_Paulo',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false, // Garante o formato 24h
};

// Criando a data com o fuso horário correto
const dataAtual = new Date().toLocaleString('pt-BR', options);

console.log(dataAtual); // Verifique no console para testar

      console.log(dataAtual); // Verifique no console para testar
      
      
    
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          barbeiro: barber,
          cliente: client,
          corte: haircut,
          data: dataAtual, // Agora a data já está formatada corretamente
        }),
      });
    
      if (!response.ok) {
        throw new Error('Falha ao enviar dados para o servidor');
      }
    
      setShowSuccess(true);
      setBarber('');
      setClient('');
      setHaircut('');
    
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocorreu um erro desconhecido');
      }
    } finally {
      setIsSaving(false);
      setTimeout(() => setShowSuccess(false), 3000);
    }
    

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

          {error && (
            <div className="text-red-500 text-sm text-center animate-fade-in">
              {error}
            </div>
          )}

          <div className="relative">
            <button
              onClick={handleSave}
              disabled={isSaving || !barber || !client || !haircut}
              className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all mt-4 sm:mt-6 shadow-lg text-sm sm:text-base ${
                isSaving || !barber || !client || !haircut ? 'opacity-80 cursor-not-allowed' : ''
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