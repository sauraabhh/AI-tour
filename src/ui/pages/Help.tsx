// import NavMain from "../Component/NavMain";
// import { useNavigate } from "react-router";
// import ToggleChatbotButton from "../Component/ToggleChatbotButton";
// import { FcPrevious } from "react-icons/fc";
// import { FcNext } from "react-icons/fc";
// import Button from "../Component/Button";

// const Help = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <NavMain />
//         <h1>feedback</h1>

//         <Button
//           onClick={() => navigate("/booking")}
//           className="flex items-center"
//         >
//           <FcPrevious />
//           Prev
//         </Button>

//         <Button onClick={() => navigate("/language")} className="items-center">
//           Next
//           <FcNext />
//         </Button>
//       </div>

//       <ToggleChatbotButton />

//       <div style={{}}>Ratiings & Reviews</div>
//     </div>
//   );
// };

// export default Help;

// import NavMain from "../Component/NavMain";
// import { useNavigate } from "react-router";
// import ToggleChatbotButton from "../Component/ToggleChatbotButton";
// import { FcPrevious, FcNext } from "react-icons/fc";
// import Button from "../Component/Button";
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

// const Help = () => {
//   const navigate = useNavigate();
//   const [activeFAQ, setActiveFAQ] = useState(null);

//   const faqs = [
//     {
//       question: "How do I get my payment?",
//       answer:
//         "Payments are processed securely and will be transferred to your account within 3-5 business days.",
//     },
//     {
//       question: "Can I cancel my booking?",
//       answer:
//         "Yes, bookings can be canceled up to 24 hours before the scheduled time.",
//     },
//     {
//       question: "What is the refund policy?",
//       answer:
//         "Refunds are provided for cancellations made within the policy timeline.",
//     },
//     {
//       question: "How can I contact support?",
//       answer:
//         "You can reach our support team via email or live chat available on the website.",
//     },
//     {
//       question: "Are there any hidden charges?",
//       answer:
//         "No, all charges are transparent and displayed upfront during the booking process.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveFAQ(activeFAQ === index ? null : index);
//   };

//   return (
//     <div style={{ margin: "50px auto", maxWidth: "1200px" }}>
//       <NavMain />

//       <h1 style={{ textAlign: "center", margin: "20px 0" }}>Feedback Form</h1>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginBottom: "30px",
//         }}
//       >

//         <Button
//           onClick={() => navigate("/booking")}
//           className="flex items-center"
//         >
//           <FcPrevious /> Prev
//         </Button>
//         <Button
//           onClick={() => navigate("/language")}
//           className="flex items-center"
//         >
//           Next <FcNext />
//         </Button>
//       </div>

//       <ToggleChatbotButton />

//       <div style={{ display: "flex", gap: "20px" }}>
//         {/* Rating & Review Section */}
//         <div
//           style={{
//             flex: 1,
//             padding: "20px",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "8px"

//           }}
//         >
//           <h2>Ratings & Reviews</h2>

//           <div style={{ marginBottom: "20px" }}>
//             <p>Hotels</p>
//             {[1, 2, 3, 4, 5].map((star, index) => (
//               <FaStar key={index} color={index < 3 ? "#FFD700" : "#ccc"} />
//             ))}
//           </div>

//           <div style={{ marginBottom: "20px" }}>
//             <p>Restaurants</p>
//             {[1, 2, 3, 4, 5].map((star, index) => (
//               <FaStar key={index} color={index < 3 ? "#FFD700" : "#ccc"} />
//             ))}
//           </div>

//           <div style={{ marginBottom: "20px" }}>
//             <p>Attractions</p>
//             {[1, 2, 3, 4, 5].map((star, index) => (
//               <FaStar key={index} color={index < 5 ? "#FFD700" : "#ccc"} />
//             ))}
//           </div>

//           <div
//           style={{
//             display: "flex",
//             flexDirection : "column",
//             gap: "8px"
//           }}
//           >
//             <h3>Mention any feedback or improvements</h3>
//             <textarea
//               placeholder="Write your feedback here..."
//               style={{
//                 width: "100%",
//                 height: "100px",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",

//               }}
//             />
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             flex: 1,
//             padding: "20px",
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             gap: "15px"
//           }}
//         >
//           <h2>FAQs</h2>
//           {faqs.map((faq, index) => (
//             <div key={index} style={{ marginBottom: "10px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <p>{faq.question}</p>
//                 <p>{activeFAQ === index ? "-" : "+"}</p>
//               </div>
//               {activeFAQ === index && (
//                 <p style={{ marginTop: "5px", color: "#555" }}>{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Help;

import NavMain from "../Component/NavMain";
import { useNavigate } from "react-router";
import ToggleChatbotButton from "../Component/ToggleChatbotButton";
import { FcPrevious, FcNext } from "react-icons/fc";
import Button from "../Component/Button";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Help = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [ratings, setRatings] = useState({
    hotels: 0,
    restaurants: 0,
    attractions: 0,
  });

  const faqs = [
    {
      question: "How do I get my payment?",
      answer:
        "Payments are processed securely and will be transferred to your account within 3-5 business days.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, bookings can be canceled up to 24 hours before the scheduled time.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Refunds are provided for cancellations made within the policy timeline.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email or live chat available on the website.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, all charges are transparent and displayed upfront during the booking process.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleRatingClick = (category, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [category]: rating }));
  };

  return (
    // REMOVE max-width: 1200px , if it is not required
    <div style={{ margin: "50px auto", maxWidth: "1200px" }}>
      <NavMain />

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Feedback</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Button
          onClick={() => navigate("/booking")}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-gray-200"
        >
          <FcPrevious /> <span>Prev</span>
        </Button>
        <Button
          onClick={() => navigate("/language")}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-gray-200"
        >
          <span>Next</span> <FcNext />
        </Button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Rating & Review Section */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2>Ratings & Reviews</h2>

          <div style={{ marginBottom: "20px" }}>
            <p>Hotels</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                color={star <= ratings.hotels ? "#FFD700" : "#ccc"}
                onClick={() => handleRatingClick("hotels", star)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <p>Restaurants</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                color={star <= ratings.restaurants ? "#FFD700" : "#ccc"}
                onClick={() => handleRatingClick("restaurants", star)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <p>Attractions</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                color={star <= ratings.attractions ? "#FFD700" : "#ccc"}
                onClick={() => handleRatingClick("attractions", star)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3>Mention any feedback or improvements</h3>
            <textarea
              placeholder="Write your feedback here..."
              style={{
                width: "100%",
                height: "100px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Submit Button */}
          <Button
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Submit
          </Button>
        </div>

        {/* FAQ Section */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            display:" flex",
            flexDirection:"column",
            gap: "8px"
          }}
        >
          <h2>FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => toggleFAQ(index)}
              >
                <p>{faq.question}</p>
                <p>{activeFAQ === index ? "-" : "+"}</p>
              </div>
              {activeFAQ === index && (
                <p style={{ marginTop: "5px", color: "#555" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Chatbot Button */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <ToggleChatbotButton />
      </div>
    </div>
  );
};

export default Help;
