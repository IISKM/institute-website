"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-dark focus:bg-gray-100 focus:text-dark",
          className
        )}
        {...props}
      >
        <div className="text-sm font-semibold leading-none mb-1 text-dark">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <header className={`absolute top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between font-sans transition-all duration-300 ${isAboutPage ? 'bg-blue-700 bg-dark shadow-md' : 'bg-transparent'}`}>
      <Link href="/" className="flex items-center bg-transparent p-2 px-3">
        <Image src="/images/Logo - White.png" alt="IISKM Logo" width={250} height={60} className="object-contain w-40 md:w-56 h-auto" priority />
      </Link>
      
      <div className="hidden md:flex flex-1 justify-center z-50">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none drop-shadow-md">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none drop-shadow-md">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20 hover:text-white data-[state=open]:bg-white/20 data-[state=open]:text-white focus:bg-white/20 focus:text-white font-semibold drop-shadow-md border-0 text-base">Membership</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1 bg-white text-dark shadow-xl border border-gray-100 rounded-lg">
                  <ListItem href="/membership-info" title="Membership Information">
                    Learn about the benefits and types of memberships.
                  </ListItem>
                  <ListItem href="/how-to-join" title="How to become a member">
                    Step by step guide to joining our community.
                  </ListItem>
                  <ListItem href="/fellowship" title="Fellowship Information">
                    Details on our exclusive fellowship programs.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none drop-shadow-md">
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20 hover:text-white data-[state=open]:bg-white/20 data-[state=open]:text-white focus:bg-white/20 focus:text-white font-semibold drop-shadow-md border-0 text-base">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1 bg-white text-dark shadow-xl border border-gray-100 rounded-lg">
                  <ListItem href="/research" title="Research">
                    Access our latest publications and research findings.
                  </ListItem>
                  <ListItem href="/certificate-verification" title="Certificate Verification">
                    Verify the authenticity of professional certificates.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none drop-shadow-md">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-4 items-center">
        <button className="hidden sm:block bg-secondary text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:-translate-y-1 hover:shadow-secondary/50 transition-all duration-300 text-sm md:text-base">
          Apply Now
        </button>
        {/* Mobile menu button */}
        <button className="md:hidden text-white drop-shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
