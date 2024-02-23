import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookingList = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

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
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (user.email) {
      fetchAppointments();
    }
  }, [user.email]);

  return (
    <div className="bg-[#F4F7FC] flex flex-wrap justify-start gap-8 p-10">
      {appointments.map((card) => (
        <div key={card._id} className="card w-[320px] bg-[#FFFFFF] shadow-sm">
          <div className="flex justify-end">
            <button
              style={{
                color:
                  card.statusbar === "Pending"
                    ? "#FF4545"
                    : card.statusbar === "In Progress"
                    ? "#FFD700"
                    : "#008000",
                backgroundColor:
                  card.statusbar === "Pending"
                    ? "#FFE3E3"
                    : card.statusbar === "In Progress"
                    ? "#FFF4CC"
                    : "#E6F4EA",
              }}
              className="px-2 py-2 rounded"
            >
              {card.statusbar}
            </button>
          </div>
          <div className="card-body">
            <h2 className="card-title text-[#111430]">{card.services}</h2>
            <p className="text-gray-700 font-semibold text-sm">
              Payment Method: {card.paymentMethod}
            </p>
            <h4>ID: {card._id}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
