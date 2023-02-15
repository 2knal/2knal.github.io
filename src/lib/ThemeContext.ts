import { createContext } from "react";

import { getTheme } from "./utils";

const ThemeContext = createContext(getTheme());

export default ThemeContext;
