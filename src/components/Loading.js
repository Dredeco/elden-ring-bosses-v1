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
`

export default function Loading() {
  return (
    <Container>
      <p>Loading...</p>
    </Container>
  )
}
