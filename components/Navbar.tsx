"use client"
import { useCurrentUser } from '@/services/supabase/hooks/useCurrentUser'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const { user, isLoading } = useCurrentUser()
    return (
        <div className='border-b bg-background h-header'>
            <nav className='container mx-auto px-4 flex justify-between items-center'>
                <Link href={"/"} className='text-xl font-bold'>Chatty</Link>
            </nav>
        </div>
    )
}
