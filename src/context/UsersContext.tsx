import { createContext, ReactNode, useState } from "react";
import { User, UserContextType } from "../types/User";

const UserContext = createContext({} as UserContextType);

interface Props {
  children: ReactNode;
}

export function UserContextProvider({ children }: Props) {
  const [Users, SetUsers] = useState<Array<User>>([]);

  return (
    <UserContext.Provider value={{ Users, SetUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
