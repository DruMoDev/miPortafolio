import { createContext, useState } from "react";
import { proyectosContent } from "../db/proyectosContent";

const PortafolioContext = createContext();

const PortafolioProvider = ({ children }) => {
  const [proyectosState, setProyectosState] = useState(proyectosContent);
  const [isDivVisible, setIsDivVisible] = useState("aboutMe");

  return (
    <PortafolioContext.Provider
      value={{ proyectosState, isDivVisible, setIsDivVisible }}>
      {children}
    </PortafolioContext.Provider>
  );
};

export { PortafolioProvider };

export default PortafolioContext;
