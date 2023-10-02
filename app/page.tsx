"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

export default function Home() {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('key')
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [content, setContent] = useState(typeof window !== "undefined" ? localStorage.getItem("content") || "" : "")

  return (
    <main className="flex justify-center w-screen py-24 h-screen" onClick={() => textareaRef.current?.focus()}>
      <div className='after:whitespace-pre-wrap grid w-1/2 pb-24'>
        <ReactTextareaAutosize className='outline-none bg-transparent resize-none' ref={textareaRef} value={content} onChange={(e) => {
          setContent(e.target.value)
          localStorage.setItem("content", e.target.value)
        }} />
      </div>
    </main>
  )
}
