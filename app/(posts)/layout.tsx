// import './globals.css'

import { Metadata } from 'next'

import ProfilePic from '@/components/ProfilePic'
export const metadata:Metadata = {
  title: 'Zim Blog | WebZim',
  description: 'Created by Steven Zimmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <main className="px-4 md:px-6  mx-auto ">
          <div className='max-w-xl mx-auto p-12'>
            <ProfilePic />
           
            {children}
          </div>
        </main>
    </>
  )
}
