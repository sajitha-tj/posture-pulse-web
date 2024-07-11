"use client";

import { cn } from '@/utils/cn';
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

// type Props = {}

const NavBar = ({className, noPosesView}: {className? : string, noPosesView? : boolean}) => {
    const [active, setActive] = useState<string | null>(null);
    return (
    <div className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <a href='/' className='font-bold text-lg'>PosturePulse</a>
            {!noPosesView && (
            <MenuItem setActive={setActive} active={active} item="Select Pose">
                <div className="text-sm grid grid-cols-1 gap-4 h-[80vh] overflow-y-scroll pr-4">
                    <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="/images/poses/tree_pos.jpg"
                    description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="/images/poses/tree_pos.jpg"
                    description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                    title="Moonbeam"
                    href="https://gomoonbeam.com"
                    src="/images/poses/tree_pos.jpg"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                    title="Rogue"
                    href="https://userogue.com"
                    src="/images/poses/tree_pos.jpg"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                </div>
            </MenuItem>
            )}
        </Menu>
    </div>
  )
}

export default NavBar