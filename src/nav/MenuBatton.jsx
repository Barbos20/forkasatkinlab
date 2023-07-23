import React from "react";
import "./MenuBatton.css";

// const MenuButton = ({ label, active, onClick }) => {
//   return (
//     <button
//       className={`menu-button ${active ? "active" : ""}`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// };
const MenuButton = React.forwardRef(({ label, active, onClick }, ref) => {
  return (
    <button
      ref={ref}
      className={`menu-button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
});

export default MenuButton;
