import Image from 'next/image'
import React from 'react'
import { Container } from './styles'

export default function Loading() {
  return (
    <Container>
      <p>Loading...</p>
      <Image 
        src={'https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'}
        width={50}
        height={50}
        alt='Loading'
      />
    </Container>
  )
}
