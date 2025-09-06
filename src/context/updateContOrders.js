import { createContext } from "react";

const UpdateContOrders = createContext({
  cont: null,
  getContHandler: () => {},
});

export default UpdateContOrders;
