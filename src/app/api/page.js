import React from 'react'
import Counter from './counter'
import Link from 'next/link'

export default function ApiCalls() {
    return(
    <div>
        <Link href="/">Go To home tab</Link>
        
        <Counter/>
    </div>
    )
}
