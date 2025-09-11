import { AuthContext } from "./../../../Providers/AuthProvider.jsx";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectCartTotalAmount } from "../../Cart/cartSlice.jsx";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const totalPrice = useSelector(selectCartTotalAmount);
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        👤 User Dashboard
      </h1>

      {user?.displayName && (
        <p className="text-lg text-gray-500 mb-6">
          Welcome back, {user.displayName}!
        </p>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Spending</p>
          <p className="text-2xl font-bold text-gray-700">{totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
