"use client";

import Container from "./Container";
import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
// import CartIcon from "./CartIcon";
import FavouriteIcon from "./FavouriteIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";

import { SignedIn, SignedOut, UserButton, ClerkLoaded } from "@clerk/nextjs";

const Header = () => {
  // const { user } = useUser();

  return (
    <header className="backdrop-blur-md py-5 sticky top-0 z-50 bg-white/80 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/5 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-fit flex items-center justify-end gap-5">
          <SearchBar />
          {/* <CartIcon /> */}
          

          <SignedIn>
            <ClerkLoaded>
                <FavouriteIcon />
              <UserButton />
            </ClerkLoaded>
          
          </SignedIn>

          <SignedOut>
            <SignIn />
          </SignedOut>
        </div>
      </Container>
    </header>
  );
};

export default Header;
