import { useState, useEffect } from "react";

const UserDropDown  = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock login/logout functionality for the demo
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("accessToken", "mock-token-12345");
    setIsLoggedIn(true);
    window.dispatchEvent(new Event("storage"));
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-green-600">BrandLogo</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <nav className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                </nav>
              </div>

              <div className="flex items-center space-x-2">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Login
                  </button>
                )}

                <UserDropDown
                  labels={{
                    profile: "My Profile",
                    logout: "Sign Out",
                    login: "Sign In",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            User Dropdown Demo
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            This is a demonstration of the improved user dropdown component.
          </p>

          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                >
                  Click to Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Click to Login
                </button>
              )}
            </div>
            <div className="ml-3 inline-flex">
              <span className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Current Status: {isLoggedIn ? "Logged In" : "Logged Out"}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Render the demo
export default HeaderDemo;
