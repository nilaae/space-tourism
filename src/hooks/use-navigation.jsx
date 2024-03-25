import { useContext } from "react";
import NavigationContex from "../context/navigation";
function useNavigation() {
  return useContext(NavigationContex);
}
export default useNavigation;
