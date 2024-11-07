"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { BriefcaseIcon, SearchIcon, UserCircleIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="font-bold">Global Jobs</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/jobs" className="flex items-center space-x-1 text-sm font-medium">
            <SearchIcon className="h-4 w-4" />
            <span>Find Jobs</span>
          </Link>
          <Link href="/resources" className="text-sm font-medium">Resources</Link>
          <Link href="/about" className="text-sm font-medium">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">
              <UserCircleIcon className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
          <Button size="sm" className="hidden md:inline-flex">Post a Job</Button>
        </div>
      </div>
    </header>
  );
}