"use client"
import React, { useEffect, useState } from 'react'
import service from "/public/image/service.png"
import boy from "/public/image/boy.png"
import boy2 from "/public/image/boy2.png"
import woman from "/public/image/woman.png"

import Link from 'next/link'
import { BoltIcon, ClipboardIcon, ExpandIcon, LightbulbIcon, MegaphoneIcon, PencilIcon, PenIcon } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import Header from '@/app/dashboard/_components/Header'
import { useRouter } from 'next/navigation'

const ServicePage: React.FC = () => {
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
    <div className="md:ml-64">
    <Header token={token} username={username} />
    <main className="flex-1">
        <section className="w-full py-8 md:py-8 lg:py-16 xl:py-32 bg-violet-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Creativity with Our AI Content Generator
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Effortlessly create high-quality content for your business with our advanced AI technology.
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-105"
                  prefetch={false}
                >
                  Try It Now
                </Link>
              </div>
              <Image
                src={service}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover how our AI content generator can transform your business.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
              <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-violet-50 cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <PenIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Blog Content</h3>
                <p className="text-center">
                  Generate engaging blog posts, articles, and thought leadership content.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-violet-50 cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <LightbulbIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Social Media</h3>
                <p className="text-center">
                  Create captivating social media posts, captions, and ad copy.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-violet-50 cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <PencilIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Product Descriptions</h3>
                <p className="text-center">
                  Craft compelling product descriptions to boost your sales.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-violet-50 cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <MegaphoneIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Marketing Copy</h3>
                <p className="text-center">
                  Generate attention-grabbing marketing copy for your campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-violet-50">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the powerful features that make our AI content generator stand out.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-background rounded-lg cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <BoltIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Instant Generation</h3>
                <p className="text-center">
                  Get high-quality content in seconds with our lightning-fast AI.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-background rounded-lg cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <ExpandIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Customizable</h3>
                <p className="text-center">
                  Tailor the content to your exact needs with our advanced customization options.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-background rounded-lg cursor-pointer hover:bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 transition-all hover:text-white hover:scale-105">
                <ClipboardIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Unlimited Revisions</h3>
                <p className="text-center">
                  Refine your content as many times as needed to get it just right.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl text-center">
                  Hear from the people who have experienced the power of our AI content generator.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-8">
              <Card className="p-6 bg-violet-50 rounded-lg">
                <div className="flex items-start space-x-4">
                <Image className="rounded-full" src={boy} alt="Rounded avatar" width={40} height={40}/>
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-muted-foreground">CEO, TechNova Solutions</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "The AI content generator has been a game-changer for our business. It has saved us countless hours
                  and helped us create high-quality content that resonates with our audience."
                </p>
              </Card>
              <Card className="p-6 bg-violet-50 rounded-lg">
                <div className="flex items-start space-x-4">
                <Image className="rounded-full" src={woman} alt="Rounded avatar" width={40} height={40}/>
                  <div>
                    <h4 className="text-lg font-semibold">Jane Smith</h4>
                    <p className="text-muted-foreground">Marketing Manager, Astra Dynamics</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I was skeptical about using an AI content generator at first, but the results have been incredible.
                  The content it produces is not only high-quality, but it also captures the unique voice and tone of
                  our brand."
                </p>
              </Card>
              <Card className="p-6 bg-violet-50 rounded-lg">
                <div className="flex items-start space-x-4">
                <Image className="rounded-full" src={boy2} alt="Rounded avatar" width={40} height={40}/>
                  <div>
                    <h4 className="text-lg font-semibold">Michael Johnson</h4>
                    <p className="text-muted-foreground">Content Manager, Quantum Pulse</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "The AI content generator has completely transformed our content creation process. It has allowed us
                  to scale our content production while maintaining a high level of quality and consistency."
                </p>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-105"
                prefetch={false}
              >
                Try It Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}

export default ServicePage
