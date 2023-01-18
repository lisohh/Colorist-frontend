import * as api from "../api";
import { suspend } from "suspend-react";

function useSaves() {
  return suspend(api.getSaves, ["saves"]);
}

export default useSaves;
