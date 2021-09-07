import React, { useState } from "react";

import { UserContext, initialData } from "./UserContext";

export default function UserProvider({ children }) {
  const [users, setUsers] = useState(initialData);

  const getUser = (id) => users.find((u) => u.id === id) || null;

  return (
    <UserContext.Provider value={{users, getUser}}>
        {children}  
    </UserContext.Provider>
  );
}
