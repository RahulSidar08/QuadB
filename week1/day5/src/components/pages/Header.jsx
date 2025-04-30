import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <header
      className={`flex justify-between items-center p-4 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow`}
    >
      <h1 className="text-2xl font-bold">🛒 ShopNow</h1>
      <div className="flex space-x-5 items-center">
        <Link to="/">Home </Link>
        <Link to="/cart">Go to Cart</Link>
        <Link to="/add">Add Product</Link>
        {user ? <p>{user.email}</p> : <Link to="/login">Login</Link>}

        <button
          onClick={toggleTheme}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
