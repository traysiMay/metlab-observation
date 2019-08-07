import React from "react";
import { Drizzle, generateStore } from "drizzle";
import Context from "./DrizzleContext";
import ToadTix from "../contracts/ToadTix.json";

const options = {
  contracts: [ToadTix],
  web3: {
    fallback: {
      type: "ws",
      url: "wss://ropsten.infura.io/ws"
    }
  }
};

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);
const Provider = ({ children }) => {
  return <Context.Provider drizzle={drizzle}>{children}</Context.Provider>;
};

export default Provider;
