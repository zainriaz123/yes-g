"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "./ui/navbar-menu";

import { cn } from "@/lib/utils";
import Link from "next/link";






function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" fixed top-10 inset-x-0 max-w-2xl mx-auto z-50" )}>
    <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        <Link href="/Home" onClick={() =>  setActive("Home")}>Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About"
        >
        <Link href="/About" onClick={( )  =>  setActive(" About")}> About</Link>
        
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        <Link href="/Contact" onClick={() =>  setActive("Contact")}>Contact</Link>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Courses">
        <Link href="/Courses" onClick={() =>  setActive("Courses")}>Courses</Link>
        </MenuItem>
    </Menu>
  
    </div>
  )
}

export default Navbar
