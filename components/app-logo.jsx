"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AppLogo = () => {
  const { theme } = useTheme();
  return (
    <Image
      alt="app-logo"
      height={48}
      width={48}
      src={`/zakusei-${theme ? theme : "light"}.svg`}
      className="ease-in-out dark:invert"
    />
  );
};

export default AppLogo;
