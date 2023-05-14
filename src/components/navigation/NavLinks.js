// import { NavLink } from "react-router-dom";

// import React from "react";

// const NavLinks = () => {
//   return (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? classes.active : "")}
//         >
//           Home
//         </NavLink>
//       </li>
//       {isAuth && (
//         <>
//           <li>
//             <NavLink
//               to="/create"
//               className={({ isActive }) => (isActive ? classes.active : "")}
//             >
//               Create A Post
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/" onClick={signOutHandler}>
//               Sign Out
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to={`/profile/${user?._id}`}>{user?.username}</NavLink>
//           </li>
//         </>
//       )}
//       {!isAuth && (
//         <>
//           <li>
//             <NavLink
//               to="/signin"
//               className={({ isActive }) => (isActive ? classes.active : "")}
//             >
//               Sign In
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/signup"
//               className={({ isActive }) => (isActive ? classes.active : "")}
//             >
//               Sign Up
//             </NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );
// };

// export default NavLinks;
