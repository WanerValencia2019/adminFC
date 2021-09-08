import { useSelector } from 'react-redux';


export const listUsers = useSelector((state)=>state.users.list);
export const roles = useSelector((state)=>state.users.roles);
