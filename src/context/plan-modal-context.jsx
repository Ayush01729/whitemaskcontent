import { createContext, useContext, useState, useCallback } from "react";

const PlanModalContext = createContext({
  isOpen: false,
  selectedTier: null,
  openPlanModal: () => {},
  closePlanModal: () => {},
});

export function PlanModalProvider({ children }) {
  const [selectedTier, setSelectedTier] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPlanModal = useCallback((tier) => {
    setSelectedTier(tier || { name: "Custom", price: 0 });
    setIsOpen(true);
  }, []);

  const closePlanModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <PlanModalContext.Provider value={{ isOpen, selectedTier, openPlanModal, closePlanModal }}>
      {children}
    </PlanModalContext.Provider>
  );
}

export function usePlanModal() {
  const context = useContext(PlanModalContext);
  if (!context) {
    throw new Error("usePlanModal must be used within a PlanModalProvider");
  }
  return context;
}
