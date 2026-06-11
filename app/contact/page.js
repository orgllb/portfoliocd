'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">

        <p className="text-[10px] text-[#444440] uppercase mb-4">Contact</p>
        <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[6rem] text-[#EBEBEB] leading-none mb-16">Lets Talk</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            {sent ? (
              <div className="border border-[#1e1e1c] p-8">
                <p style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#EBEBEB] mb-2">Message sent.</p>
                <p className="text-[11px] text-[#555550]">Thanks for reaching out. I will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] text-[#444440] uppercase mb-2">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-transparent border border-[#1e1e1c] px-4 py-3 text-[11px] text-[#EBEBEB] focus:outline-none focus:border-[#444440] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] text-[#444440] uppercase mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border border-[#1e1e1c] px-4 py-3 text-[11px] text-[#EBEBEB] focus:outline-none focus:border-[#444440] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] text-[#444440] uppercase mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full bg-transparent border border-[#1e1e1c] px-4 py-3 text-[11px] text-[#EBEBEB] focus:outline-none focus:border-[#444440] transition-colors resize-none" />
                </div>
                <button type="submit" className="text-[11px] uppercase text-[#111111] bg-[#EBEBEB] px-8 py-3 hover:bg-[#cccccc] transition-colors">Send Message</button>
              </form>
            )}
          </div>

          <div className="md:pl-8 md:border-l border-[#1a1a18]">
            <div className="mb-10">
              <p className="text-[10px] text-[#333330] uppercase mb-4">Based in</p>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#EBEBEB]">Melbourne, Australia</p>
            </div>
            <div className="mb-10">
              <p className="text-[10px] text-[#333330] uppercase mb-4">Email</p>
              <a href="mailto:hello@yourname.com" style={{ color: '#555550', fontSize: '11px' }}>batorgil@bb.com</a>
            </div>
            <div className="mb-10">
              <p className="text-[10px] text-[#333330] uppercase mb-4">Availability</p>
              <p className="text-[11px] text-[#555550]">Currently accepting new projects.</p>
            </div>
            <div>
              <p className="text-[10px] text-[#333330] uppercase mb-4">Follow</p>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#444440', fontSize: '11px' }}>Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#444440', fontSize: '11px' }}>LinkedIn</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#444440', fontSize: '11px' }}>Behance</a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}