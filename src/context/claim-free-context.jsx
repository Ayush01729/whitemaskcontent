import { createContext, useContext, useState } from "react";

const ClaimFreeContext = createContext(null);

export function ClaimFreeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialUrl, setInitialUrl] = useState("");

  const openClaimModal = (url = "") => {
    setInitialUrl(url);
    setIsOpen(true);
  };

  const closeClaimModal = () => {
    setIsOpen(false);
  };

  return (
    <ClaimFreeContext.Provider value={{ isOpen, initialUrl, openClaimModal, closeClaimModal }}>
      {children}
    </ClaimFreeContext.Provider>
  );
}

export function useClaimFree() {
  const context = useContext(ClaimFreeContext);
  if (!context) {
    throw new Error("useClaimFree must be used within a ClaimFreeProvider");
  }
  return context;
}
