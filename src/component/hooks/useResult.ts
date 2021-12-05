import { useContext } from "react";

// useContextを利用していることをカプセル化するためのクラス（らしい）

import {
  AllResultsContext,
  AllResultsType
} from "../providers/AllResultsContext";

export const useResult = (): AllResultsType => useContext(AllResultsContext);

