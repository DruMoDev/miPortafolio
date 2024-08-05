import { createContext, useState } from "react";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [isDivVisible, setIsDivVisible] = useState("aboutMe");

  return (
    <PortafolioContext.Provider
      value={{  isDivVisible, setIsDivVisible }}>
      {children}
    </PortafolioContext.Provider>
  );
};

export { PortafolioProvider };

export default PortafolioContext;
