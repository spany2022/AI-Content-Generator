"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/dashboard/_components/Header';
import { useRouter } from 'next/navigation';

const FaqPage: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
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

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the AI Content Generator?',
      answer: 'The AI Content Generator is a powerful tool that uses advanced natural language processing algorithms to generate high-quality content on a wide range of topics. Whether you need blog posts, product descriptions, or social media updates, our AI can help you create engaging and compelling content quickly and efficiently.',
    },
    {
      question: 'How does the AI Content Generator work?',
      answer: 'Our AI Content Generator uses a large language model that has been trained on a vast amount of text data from the internet. By analyzing patterns and relationships in this data, the AI can generate new, original content that is tailored to your specific needs and preferences. Simply provide the AI with a topic, tone, and length, and it will generate high-quality content for you.',
    },
    {
      question: 'How accurate and reliable is the AI Content Generator?',
      answer: 'We take great pride in the accuracy and reliability of our AI Content Generator. Our language model has been extensively trained and tested to ensure that it produces high-quality, factually accurate content. While the generated content is not a substitute for human-written material, it can be a valuable tool for quickly generating initial drafts or ideas.',
    },
    {
      question: 'How much does the AI Content Generator cost?',
      answer: 'We offer a range of pricing plans for our AI Content Generator, starting at $9.99 per month for individual users and scaling up for larger teams and enterprises. Our plans are designed to be affordable and accessible, with flexible options to fit your needs and budget. You can learn more about our pricing on our website or by contacting our sales team.',
    },
    {
      question: 'How can I get started with the AI Content Generator?',
      answer: 'Getting started with our AI Content Generator is easy! Simply sign up for an account on our website and you can start generating content right away. Our intuitive interface and step-by-step guides will walk you through the process, and our customer support team is always available to answer any questions you may have.',
    },
  ];

  return (
    <div className="md:ml-64">
      <Header token={token} username={username} />
    <div className="bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-muted-foreground">Get the answers you need about our AI Content Generator.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border border-input bg-card p-4">
                <div
                  className="flex w-full items-center justify-between cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div>
                    {openQuestionIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openQuestionIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="prose text-muted-foreground mt-4">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/dashboard">
            <Button className="bg-[#704ef8] text-primary-foreground hover:bg-[#5c3dc7] transition-colors">
              Try the AI Content Generator
            </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default FaqPage;
