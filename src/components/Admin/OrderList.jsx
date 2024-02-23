import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const OrderList = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          `https://parlour-server-seven.vercel.app/appointments/?email=${user.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(`https://parlour-server-seven.vercel.app/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ statusbar: status }),
      });
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      // Update the local state after successful status update
      setOrders((prevOrders) => {
        return prevOrders.map((order) => {
          if (order._id === id) {
            return { ...order, statusbar: status };
          }
          return order;
        });
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex m-4 lg:m-10 items-center h-auto">
      <div className="bg-white shadow-sm p-8 rounded-lg overflow-auto h-full lg:w-full w-[360px]">
        <table className="min-w-full table-auto ">
          <thead>
            <tr>
              <th className="py-2 px-4 lg:pr-32 bg-[#F5F6FA] rounded-md">
                Name
              </th>
              <th className="py-2 px-4 lg:pr-32 bg-[#F5F6FA] rounded-md">
                Email ID
              </th>
              <th className="py-2 px-4 lg:pr-32 bg-[#F5F6FA] rounded-md">
                Service
              </th>
              <th className="py-2 px-4 lg:pr-32 bg-[#F5F6FA] rounded-md">
                Pay With
              </th>
              <th className="py-2 px-4 lg:pr-32 bg-[#F5F6FA] rounded-md">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-4 px-6 text-black font-semibold">
                  {order.fullName}
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  {order.email}
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  {order.services}
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  {order.paymentMethod}
                </td>
                <td className="py-4 px-6">
                  <select
                    className="bg-white"
                    value={order.statusbar}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    style={{
                      color:
                        order.statusbar === "Pending"
                          ? "#FF4545"
                          : order.statusbar === "In Progress"
                          ? "#FFD700"
                          : "#008000",
                    }}
                  >
                    <option value="Pending" className="text-red-500">Pending</option>
                    <option value="In Progress" className="text-yellow-400">In Progress</option>
                    <option value="Done" className="text-green-500">Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
