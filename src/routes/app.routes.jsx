import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
