import React, { useState } from "react";

export default function ComandaForm() {
  const [barbeiro, setBarbeiro] = useState("");
  const [cliente, setCliente] = useState("");
  const [servicos, setServicos] = useState("");
  const [valorTotal, setValorTotal] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      barbeiro,
      cliente,
      servicos: servicos.split(","),
      valor_total: parseFloat(valorTotal),
    };

    try {
      const response = await fetch("https://dinastia-n8n-editor.v29lah.easypanel.host/webhook-test/comanda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status); // Log do status da resposta

      if (!response.ok) throw new Error("Erro ao enviar comanda");

      alert("Comanda enviada com sucesso!");
      setBarbeiro("");
      setCliente("");
      setServicos("");
      setValorTotal("");
    } catch (error) {
      console.error(error);
      alert("Falha ao enviar a comanda.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
      <label className="block">Nome do Barbeiro:</label>
      <input
        type="text"
        value={barbeiro}
        onChange={(e) => setBarbeiro(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <label className="block mt-2">Nome do Cliente:</label>
      <input
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <label className="block mt-2">Serviços:</label>
      <input
        type="text"
        value={servicos}
        onChange={(e) => setServicos(e.target.value)}
        placeholder="Ex: Corte Social, Barba"
        className="w-full p-2 border rounded"
        required
      />

      <label className="block mt-2">Valor Total:</label>
      <input
        type="number"
        value={valorTotal}
        onChange={(e) => setValorTotal(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />

      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Enviar Comanda
      </button>
    </form>
  );
}
