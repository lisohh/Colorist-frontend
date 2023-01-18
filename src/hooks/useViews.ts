import * as api from "../api";
import { suspend } from "suspend-react";

function useViews() {
  return suspend(api.getViews, ["views"]);
}

export default useViews;
