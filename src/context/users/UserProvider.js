import React, { useState } from "react";

import { UserContext, initialData } from "./UserContext";

export default function UserProvider({ children }) {
  const [users, setUsers] = useState(initialData);

  const getUser = (id) => users.find((u) => u.id === id) || null;

  const addUser = (name, lastName, email, description) => {
    let last = users[users.length - 1];
    console.log(last)
    users.push({  
      id: last.id + 1,
      username: name+lastName,
      name: name,
      lastName: lastName,
      description: description,
      age: 0,
      email: email,
      mobilePhone: "3284348549",
      coordinates: {},
      cityId: "21",
      countryId: "21",
      status: true,
      createdAt: new Date().toUTCString(),
    });
  };

  return (
    <UserContext.Provider value={{ users, getUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
}
