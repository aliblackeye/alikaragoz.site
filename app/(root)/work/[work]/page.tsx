"use client"

import React from 'react'
import { usePathname } from 'next/navigation'


// Components
import PageInfo from '@components/page-info';

interface IWorkProps {
}

export default function Work(props: IWorkProps) {

    // Destructure props
    const { } = props;

    const pathname = usePathname()


    const workName = pathname.split('/')[2]

    return (
        <div>
            <PageInfo title={workName} description="Work" />
        </div>
    )
}
