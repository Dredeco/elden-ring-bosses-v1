import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,.7);
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 1.6rem;
  }
`

export default function Loading() {
  return (
    <Container>
      <p>Loading...</p>
      <Image 
        src={'https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'}
        width={50}
        height={50}
      />
    </Container>
  )
}
