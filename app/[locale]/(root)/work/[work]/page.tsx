"use client"

import { usePathname } from 'next/navigation'

// Components
import PageInfo from '@components/page-info';
import Container from '@components/container';

interface IWorkProps {
}

export default function Work(props: IWorkProps) {

    // Destructure props
    const { } = props;

    const pathname = usePathname()

    const workName = pathname.split('/')[2]

    console.log(workName)

    return (
        <div className='work-page'>
            <Container className='work-page-container'>
                <PageInfo title={workName} description="Work" />
            </Container>
        </div>
    )
}
