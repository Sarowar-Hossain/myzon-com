import { NavLink } from "react-router-dom";

const IsActive = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      activeClassName="underline"
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default IsActive;
