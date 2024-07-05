import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      Sign In
      <Link to={"/sign-up"}>
        <span className="text-blue-700">Sign up</span>
      </Link>
    </div>
  );
}
