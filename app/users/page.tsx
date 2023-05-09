"use client";

import { signOut } from "next-auth/react";

const Users = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Users;
