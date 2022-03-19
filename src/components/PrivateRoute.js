import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


function PrivateRoute() {
  const isLogin = useSelector((state) => state.isLogin);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
// console.log(isLogged);
}

export default PrivateRoute;
