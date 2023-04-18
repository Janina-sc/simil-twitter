import React from 'react'
import Link from 'next/link'
import AppLayout from '@/components/AppLayout'

function Timeline({userName}) {
  return (
    <>
    <AppLayout>
        <h1>{`This is the timeline of ${userName}`}</h1>
        <Link href='/'>Go Home</Link>
        </AppLayout>
        
    </>
  )
}
//El getInitialProps sólo funciona en componentes tipo pages!!
Timeline.getInitialProps= ()=>{ //se le pasan las props que va a ejecutar el componente
    return fetch('http://localhost:3000/api/hello')
    .then(res=> res.json())
    

}

export default Timeline