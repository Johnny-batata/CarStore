import React, { createContext, useState } from "react";

interface IContext {
  setCheckout: Function;
  checkout : any
}

const Context = createContext({} as IContext );

const Provider = ({children}: any) => {
  const [checkout, setCheckout] = useState([])

  const MyContext = {
    checkout,
    setCheckout
  }
  return (
    <Context.Provider value={ MyContext }>{children} </Context.Provider>
  );
}

export { Provider, Context }
