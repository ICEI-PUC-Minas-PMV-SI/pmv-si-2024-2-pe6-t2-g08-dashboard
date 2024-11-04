import { useState, useContext, createContext } from 'react';

// Criação do contexto de clientes
const ClientsContext = createContext();

// Provedor do contexto de clientes
export const ClientsProvider = ({ children }) => {
  const clients = useProvideClients();
  return <ClientsContext.Provider value={clients}>{children}</ClientsContext.Provider>;
};

// Hook personalizado para usar o contexto de clientes
export const useClients = () => {
  return useContext(ClientsContext);
};

// Hook que fornece a lógica de gerenciamento de clientes
const useProvideClients = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  // Função para adicionar um novo cliente
  const addClient = (client) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  // Função para selecionar um cliente
  const selectClient = (clientId) => {
    const client = clients.find((c) => c.id === clientId);
    setSelectedClient(client);
  };

  // Função para atualizar informações do cliente selecionado
  const updateClientInfo = (newInfo) => {
    setSelectedClient((prevClient) => ({
      ...prevClient,
      ...newInfo,
    }));
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === selectedClient.id ? { ...client, ...newInfo } : client
      )
    );
  };

  return {
    clients,
    selectedClient,
    addClient,
    selectClient,
    updateClientInfo,
  };
};
