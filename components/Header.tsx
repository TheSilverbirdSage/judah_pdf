import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import {
    FilePlus2,
} from "lucide-react";
import { Button } from './ui/button'

const Header = () => {
    return (
        <div className='flex justify-between bg-white shadow-sm p-5 border-b'>
            <Link
                className='text-2xl'
                href='/dashboard'
            >
                Chat to <span className='text-yellow-500'>JUDAH PDF</span>
            </Link>

            <SignedIn>
                <div className='flex items-center space-x-2'>
                    <Button asChild variant="outline" className='hidden md:flex'>
                        <Link
                            href="/dashboard/diamond"
                        >
                            Pricing
                        </Link>
                    </Button>

                    <Button asChild variant="outline">
                        <Link
                            href="/dashboard/diamond"
                        >
                            My Documents
                        </Link>
                    </Button>

                    <Button asChild variant="outline" className='hidden md:flex'>
                        <Link
                            href="/dashboard/upload"
                        >
                            <FilePlus2 className='text-yellow-500' />
                        </Link>
                    </Button>

                    {/* UPGRADE BUTTON  */}
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    )
}

export default Header