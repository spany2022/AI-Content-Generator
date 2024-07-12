"use client"
import Services from '@/app/_components/Services';
import Header from '@/app/dashboard/_components/Header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AboutPage: React.FC = () => {
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
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#704ef8] to-[#9b7eff]">
            <div className="container px-4 md:px-6 text-center text-primary-foreground">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                  AI Content Generation Made Easy
                </h1>
                <p className="max-w-[700px] mx-auto text-lg md:text-xl">
                  Our AI Content Generator revolutionizes the way you create engaging, high-performing content.
                  Effortlessly generate compelling copy, articles, and more to elevate your online presence.
                </p>
              </div>
            </div>
          </section>
          <Services />
          <section className="py-20 md:py-32 bg-violet-50">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Content?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Try our AI Content Generator today and experience the power of effortless content creation.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default AboutPage;
