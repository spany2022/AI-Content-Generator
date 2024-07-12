"use client"
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/dashboard/_components/Header';

const Contactpage: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('loggedInUser');
    setToken(storedToken);
    setUsername(storedUsername);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      alert('You must be logged in to send a message.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully");
    } catch (error) {
      alert("Failed to send message");
    }
  }

  return (
    <>
      <div className="md:ml-64">
        <Header token={token} username={username} />
        <div className="bg-background text-foreground">
          <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Get in Touch</h1>
                <p className="text-muted-foreground text-lg">
                  Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name">Name</label>
                      <Input
                        type='text'
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        id="name"
                        placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">Contact Us</h2>
                      <p className="text-muted-foreground">Get in touch with our team for more information.</p>
                    </div>
                    <MailIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-primary" />
                      <p>Bhubaneswar, Odisha, India</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="w-5 h-5 text-primary" />
                      <p>+917008192334</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MailIcon className="w-5 h-5 text-primary" />
                      <p>sandeshpany24@gmail.com</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link href="https://x.com/" className="text-primary hover:text-primary/90" prefetch={false}>
                      <TwitterIcon className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.facebook.com/" className="text-primary hover:text-primary/90" prefetch={false}>
                      <FacebookIcon className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.instagram.com/" className="text-primary hover:text-primary/90" prefetch={false}>
                      <InstagramIcon className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/" className="text-primary hover:text-primary/90" prefetch={false}>
                      <LinkedinIcon className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contactpage;
