import { createContext } from "react";

export const initialData = [
  {
    id: 0,
    username: "alexShatov23",
    name: "Alex",
    lastName: "Shatov",
    description: "ipMinim irure minim in ex sint minim et eiusmod incididunt eu cillum.",
    age: 0,
    email: "alexShatov23@gmail.com",
    mobilePhone: "3284348549",
    coordinates: {},
    cityId: "21",
    countryId: "21",
    status: true,
    createdAt: new Date().toUTCString(),
  },
  {
    id: 1,
    username: "PhilipHarbach",
    name: "Philip",
    lastName: "Harbach",
    description: "ipMinim irure minim in ex sint minim et eiusmod incididunt eu cillum.",
    age: 0,
    email: "PhilipHarbach@gmail.com",
    mobilePhone: "3214348549",
    coordinates: {},
    cityId: "21",
    countryId: "21",
    status: false,
    createdAt: new Date().toUTCString(),
  },
  {
    id: 2,
    username: "MirkoFisuk2013",
    name: "Mirko",
    lastName: "Fisuk",
    description: "ipMinim irure minim in ex sint minim et eiusmod incididunt eu cillum.",
    age: 0,
    email: "MirkoFisuk2013@gmail.com",
    mobilePhone: "3244348549",
    coordinates: {},
    cityId: "21",
    countryId: "21",
    status: true,
    createdAt: new Date().toUTCString(),
  },
  {
    id: 3,
    username: "alexShatov23",
    name: "Alex",
    lastName: "Shatov",
    description: "ipMinim irure minim in ex sint minim et eiusmod incididunt eu cillum.",
    age: 0,
    email: "alexShatov23@gmail.com",
    mobilePhone: "3284348549",
    coordinates: {},
    cityId: "21",
    countryId: "21",
    status: true,
    createdAt: new Date().toUTCString(),
  },
  {
    id: 4,
    username: "alexShatov23",
    name: "Alex",
    lastName: "Shatov",
    description: "ipMinim irure minim in ex sint minim et eiusmod incididunt eu cillum.",
    age: 0,
    email: "alexShatov23@gmail.com",
    mobilePhone: "3284348549",
    coordinates: {},
    cityId: "21",
    countryId: "21",
    status: true,
    createdAt: new Date().toUTCString(),
  },
  
];

export const UserContext = createContext({
    users:[],
    getUsers: null
});