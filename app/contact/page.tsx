import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
      {/* Title */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Image
          src={
            "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={2000}
          height={1000}
          alt="contact-us"
          className="rounded-md w-full h-full object-cover"
        />
        <div className="mx-auto text-center w-full">
          <h1 className="text-3xl font-bold sm:text-4xl">Get In Touch</h1>
          <p className="text-muted-foreground mt-3">
            Let&apos;s Get Your Startup Rolling. <br />
            We&apos;d love to talk about how we can help you.
          </p>
          <div className="mx-auto mt-12 w-full">
            <Card className="p-0">
              <CardContent className="p-6">
                <h2 className="mb-8 text-xl font-semibold">
                  Fill in the form below
                </h2>
                <form>
                  <div className="grid gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                      <div className="text-left">
                        <Label htmlFor="fullname" className="mb-2">
                          Name
                        </Label>
                        <Input
                          type="text"
                          id="firstname"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                      <div className="text-left">
                        <Label htmlFor="email" className="mb-2">
                          Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="text-left">
                        <Label htmlFor="phone" className="mb-2">
                          Phone Number
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="Enter your phone"
                        />
                      </div>
                    </div>{" "}
                    <div className="text-left">
                      <Label htmlFor="message" className="mb-2">
                        Details
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid">
                    <Button
                      type="submit"
                      size="lg"
                      className="font-bold text-white"
                    >
                      Send inquiry
                    </Button>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-gray-400 text-sm">
                      We&apos;ll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-12 grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <Link
          href={"#"}
          className="group hover:bg-muted flex h-full flex-col rounded-lg p-4 text-center sm:p-6"
        >
          <BrainCircuit className="text-muted-foreground mx-auto size-9" />
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Talk to Us directly</h3>
            <p className="text-muted-foreground mt-1">
              We&apos;re here to help with any questions.
            </p>
            <p className="text-muted-foreground mt-1">
              <strong>Business Hours: </strong> Mon - Fri, 9 AM - 6 PM MYT
            </p>
            <p className="text-primary mt-5 inline-flex items-center gap-x-1 font-medium">
              Contact support
              <svg
                className="size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>

        <Link
          href={"#"}
          className="group hover:bg-muted flex h-full flex-col rounded-lg p-4 text-center sm:p-6"
        >
          <MessageSquare className="text-muted-foreground mx-auto size-9" />
          <div className="mt-5">
            <h3 className="text-lg font-semibold">FAQ</h3>
            <p className="text-muted-foreground mt-1">
              Search our FAQ for answers to anything you might ask.
            </p>
            <p className="text-primary mt-5 inline-flex items-center gap-x-1 font-medium">
              Visit FAQ
              <svg
                className="size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>

        <Link
          href={"#"}
          className="group hover:bg-muted flex h-full flex-col rounded-lg p-4 text-center sm:p-6"
        >
          <Wrench className="text-muted-foreground mx-auto size-9" />
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Extra Services</h3>
            <p className="text-muted-foreground mt-1">
              Check out our development quickstart guide.
            </p>
            <p className="text-primary mt-5 inline-flex items-center gap-x-1 font-medium">
              Contact sales
              <svg
                className="size-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
