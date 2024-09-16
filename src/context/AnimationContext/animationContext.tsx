// CartContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AnimationContextType {
  isAnimationTrue: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
interface AnimationProviderProps {
    children: ReactNode;
  }

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC <AnimationProviderProps> = ({ children }) => {
  const [isAnimationTrue, setAnimation] = useState<boolean>(false);

  return (
    <AnimationContext.Provider value={{ isAnimationTrue, setAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext= (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
