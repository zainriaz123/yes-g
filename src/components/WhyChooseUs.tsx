"use client"
import React from 'react'
import Stickyscroll from "@/components/ui/sticky-scroll-reveal"

const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-slate-500 bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-red-500">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  bg-blue-600 bg-[linear-gradient(to_bottom_right, var(--orange-500),var(--yellow-500))] flex items-center justify-center text-green-400">
    Good Work
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-yellow-500 bg-[linear-gradient(to_bottom_right, var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-red-200 bg-[linear-gradient(to_bottom_right, var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black">
          Running out of content
        </div>
      ),
    },
  ];

const whychooseus = () => {
  return (
    <div className=' bg-black p-5'>
    <StickyScroll content={content} />
    </div>
  )
}

export default whychooseus
