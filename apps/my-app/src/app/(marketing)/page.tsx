"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import {
  BiBarChart,
  BiHeart,
  BiLeftArrow,
  BiRightArrow,
  BiSolidUser,
  BiUser,
} from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { MdCalendarViewDay } from "react-icons/md";
import Link from "next/link";
import { FaTooth } from "react-icons/fa";
import {
  BsCalendarEvent,
  BsFileText,
  BsFileTextFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import {} from "@convex-dev/auth/react";
import Logo from "@/ui/logo";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Marketing() {
  return (
    <main>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex gap-2 py-4">
          <Image src={"/logo.png"} width={30} height={20} alt="Zendenta Logo" />

          <div className="font-bold font-Manrope text-lg">Zendenta</div>
        </div>
        <div></div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://github.com/biomathcode/zendenta"
            target="_blank"
          >
            Github
          </Link>

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
      <section className="w-full   py-12 md:py-24 lg:py-32 xl:py-48">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Streamline Your Dental Practice
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Efficient, user-friendly, and comprehensive dental clinic
                management system. Boost productivity and enhance patient care.
              </p>
            </div>
            <div className="space-x-4 flex gap-2">
              <Link
                href={"/dashboard"}
                className=" border bg-indigo-500 px-4 py-2 rounded-2xl text-white hover:bg-indigo-600 transition-all ease-in duration-200"
              >
                Get Started
              </Link>
              <Link
                href={"https://github.com/biomathcode/zendenta"}
                target="_blank"
                className=" flex gap-2 items-center hover:bg-neutral-300 px-4 rounded-2xl border"
              >
                Github Repo <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full relative px-10 ">
          <Image
            src="/newdashboard.png"
            width={600}
            height={600}
            alt="profile"
            layout="responsive"
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
          />
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32   ">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid gap-32 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <FcCalendar className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-bold">Appointment Scheduling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Effortlessly manage appointments and reduce no-shows
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BsFileTextFill className="h-12 w-12 mb-4 text-primary bg-n text-indigo-500" />
              <h3 className="text-lg font-bold">Electronic Health Records</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Securely store and access patient records anytime, anywhere
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BiSolidUser className="h-12 w-12 mb-4 text-primary text-teal-700" />
              <h3 className="text-lg font-bold">Patient Portal</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Empower patients with online access to their dental information
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BiBarChart className="h-12 w-12 mb-4 text-primary text-green-500" />
              <h3 className="text-lg font-bold">Analytics & Reporting</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gain insights into your practice with powerful analytics tools
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BsFillHeartFill className="h-12 w-12 mb-4 text-primary text-red-500" />
              <h3 className="text-lg font-bold">Treatment Planning</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create and manage comprehensive treatment plans for patients
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTooth className="h-12 w-12 mb-4 text-primary text-blue-500" />
              <h3 className="text-lg font-bold">Dental Charting</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Intuitive digital charting for accurate patient records
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 DentaSync Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </main>
  );
}

export default Marketing;
