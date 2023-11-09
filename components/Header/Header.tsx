import React from "react";

import { AuthMenu } from "@/components";

const Header = () => {
  return (
    <header className="shadow-common container flex justify-between bg-white py-2 text-sm">
      Hello, I am Header!
      <AuthMenu />
    </header>
  );
};

export default Header;
