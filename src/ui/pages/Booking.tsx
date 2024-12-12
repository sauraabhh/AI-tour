// import NavMain from "../Component/NavMain";
// import { useNavigate } from "react-router";
// import ToggleChatbotButton from "../Component/ToggleChatbotButton";
// import Button from "../Component/Button";
// import { FcPrevious } from "react-icons/fc";
// import { FcNext } from "react-icons/fc";

// const Booking = () => {
//   const navigate = useNavigate();
//   return (
//     <div>

//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <NavMain/>

//       <h1>Your Booking</h1>
//       <Button onClick={() => navigate("/plan-trip")}><FcPrevious/>Prev</Button>
//        <Button onClick={() => navigate("/help")}>Next<FcNext/></Button>

//     </div>
//     <ToggleChatbotButton/>
//     </div>

//   );
// };

// export default Booking;

import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import Button from "../Component/Button";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Booking = () => {
  const navigate = useNavigate();

  const bookingData = [
    {
      packageName: "Premium",
      bookingStatus: "Completed",
      dateOfBooking: "2023-12-01",
      bookedForDate: "2023-12-20",
    },
    {
      packageName: "Silver",
      bookingStatus: "Pending",
      dateOfBooking: "2023-12-05",
      bookedForDate: "2023-12-25",
    },
    {
      packageName: "Gold",
      bookingStatus: "Failed",
      dateOfBooking: "2023-12-10",
      bookedForDate: "2023-12-30",
    },
    {
      packageName: "Trip - One-time",
      bookingStatus: "Completed",
      dateOfBooking: "2023-11-25",
      bookedForDate: "2023-12-15",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#28a745"; // Green
      case "Pending":
        return "#ffc107"; // Yellow
      case "Failed":
        return "#dc3545"; // Red
      default:
        return "#6c757d"; // Gray
    }
  };

  return (
    <div style={{ margin: "50px auto", maxWidth: "1200px" }}>
      <NavMain />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Your Booking</h1>
        <div style={
          {
            display:"flex",
            justifyContent: "center"
          }
        }>
        <Button
          onClick={() => navigate("/plan-trip")}
          className="flex items-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px", // Space between the icon and text
            padding: "10px 20px",
          }}
        >
          <FcPrevious /> Prev
        </Button>

        <Button
          onClick={() => navigate("/help")}
          className="flex items-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px", // Space between the icon and text
            padding: "10px 20px",
          }}
          
         
        >
          Next <FcNext />
        </Button>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Booking Status
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#1a1a40", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Package Name
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Booking Status
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Date of Booking
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Booked For Date
              </th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {booking.packageName}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    color: getStatusColor(booking.bookingStatus),
                  }}
                >
                  {booking.bookingStatus}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {booking.dateOfBooking}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {booking.bookedForDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <ToggleChatbotButton />
      </div>
    </div>
  );
};

export default Booking;
