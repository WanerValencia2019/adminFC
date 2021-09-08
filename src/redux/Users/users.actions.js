import ActionTypes from "./../actionTypes";


export const addUser =
  (id=0,name, lastName, email, description) => (dispatch, prevState) => {
    let count = prevState().listUsers.users.length
    return dispatch({
      type: ActionTypes.ADD_USER_SUCCESS,
      payload: {
        id: count + 1,
        username: name + lastName,
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
      },
    });
  };

  export const deleteUser = (idUser) => (dispatch, prevState) => {
    let users = prevState().listUsers.users.filter((user)=>user.id !== idUser);   
      return dispatch({
          type: ActionTypes.DELETE_USER_SUCCESS,
          payload: {
              users
          },
      })
  }

  export const updateUser = (id,name, lastName, email, description) => (dispatch, prevState) => {
    let newData = {
      name: name,
      lastName: lastName,
      description: description,
      email: email,
    }
    let index = prevState().listUsers.users.findIndex((u)=>u.id===id);
    let users = prevState().listUsers.users;
    
    users[index] ={...users[index], ...newData};

    return dispatch({
      type: ActionTypes.UPDATE_USER_SUCCESS,
      payload: {
          users
      },
    }); 
  }