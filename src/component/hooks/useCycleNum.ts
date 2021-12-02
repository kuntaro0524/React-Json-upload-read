import { useContext } from "react";

// useContextを利用していることをカプセル化するためのクラス（らしい）

import {
  CycleContent,
  CycleContentType
} from "../providers/CycleIndexProvider";

export const useCycleNum = (): CycleContentType => useContext(CycleContent);
