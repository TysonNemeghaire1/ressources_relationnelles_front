'use client';
import React from "react";
import Nav from "@/components/header/nav";
import Banner from "@/components/header/banner";
import MobileHeader from "@/components/header/mobile";
import {useSmallScreen} from "@/hooks/useBreakpoint";

function Header() {
    const isSmallScreen = useSmallScreen();
    return (
        <>
            {isSmallScreen ? (
                <MobileHeader/>
            ) : (
                <>
                    <Banner/>
                    <Nav/>
                </>
            )}
        </>
    );
}

export default Header;
