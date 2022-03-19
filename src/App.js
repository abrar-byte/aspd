import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import About from "./pages/About";
import Dashboard from "./dashboard";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Tes from "./dashboard/Tes";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import HomeDashboard from "./dashboard/HomeDashboard";
import { useDispatch, useSelector } from "react-redux";
// import { HASIL } from "./actions/type";

function App() {
  const [isLogged, setIsLogged] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("token");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  const isLogin = useSelector((state) => state.isLogin);
  console.log(isLogin, "isLogged");


  return (
    <Router>
      <nav className="bg-gray-800 sticky top-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className=" sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  {/* <button onClick={dispatch({type: HASIL, Hasil: "bg-light" })}
                    // to="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dispatch
                  </button> */}
                  <Link
                    to="/about"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/dashboard"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  {/* <Link
                    to="/tes"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tes
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    {!isLogin ? (
                        <Link
                          to="/login"
                          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Login
                        </Link>
                    ) : (
                        <Link
                          to="/logout"
                          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Logout
                        </Link>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/beranda" element={<HomeDashboard />} />
          <Route path="/dashboard/beranda/tes" element={<Tes />} />
          <Route
            path="/logout"
            element={<Logout />}
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
