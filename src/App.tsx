import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import "./styles/global"
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from "react-modal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

 function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
  
  function handleIsNewTransactionModalOpen(){
    setIsNewTransactionModalOpen(true);
  }

  function handleIsNewTransactionModalClose(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleIsNewTransactionModalOpen}/>
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleIsNewTransactionModalClose}
      />
      <DashBoard />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
