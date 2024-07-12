"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import robot from "/public/image/robot.png";
import Image from "next/image";
import Services from "./_components/Services";
import Header from "./dashboard/_components/Header";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('loggedInUser');
    setToken(storedToken);
    setUsername(storedUsername);

    if (!storedToken) {
      const timeout = setTimeout(() => {
        router.push('/login');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
    <div className="md:ml-64">
      <Header token={token} username={username} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:pt-24 lg:pt-32 bg-gradient-to-r from-[#704ef8] to-[#9b7eff]">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 lg:px-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                  Unleash Your Creativity with AI-Powered Content Generation
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white">
                  Our AI content generator helps you create high-quality, engaging content with ease. Boost your
                  productivity and take your content to new heights.
                </p>
                <div className="mt-6">
                  <Link
                    href="/dashboard"
                    className="inline-flex h-10 items-center justify-center rounded-md text-purple-600 bg-white px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#704ef8]/90 hover:text-white hover:border hover:border-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="lg:flex justify-center hidden">
                <Image
                  src={robot}
                  width={550}
                  height={550}
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Service Section */}
        <Services />
        {/* Get Start section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-violet-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Take Your Content to the Next Level
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start using our AI content generator today and see the difference it can make in your content creation
                process.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#704ef8] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#704ef8]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
              <p className="text-xs text-muted-foreground">
                Sign up to get started with our AI content generator.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
