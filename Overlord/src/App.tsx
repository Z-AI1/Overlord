import { useState } from "react";

function App() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true); // Atualiza o estado para mostrar a tela de confirmação
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {!saved ? (
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold">Preencha os dados</h2>
          <button
            onClick={handleSave}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>
      ) : (
        <div className="p-6 bg-green-500 text-white shadow-lg rounded-lg animate-fade-in">
          <h2 className="text-xl font-bold">Salvo com sucesso! ✅</h2>
        </div>
      )}
    </div>
  );
}

export default App;
