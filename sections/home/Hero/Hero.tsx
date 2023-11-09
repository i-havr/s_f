"use client";

import React from "react";

import { Heading, PrimaryButton } from "@/components";
import { getCurrentUser } from "@/services";

const Hero = () => {
  return (
    <section className="py-6">
      <div className="container h-[300px]">
        <Heading tag="h1">Hero of Home page</Heading>
        <PrimaryButton actionHandler={getCurrentUser}>
          Отримати поточного юзера
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
