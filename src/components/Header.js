import React from 'react'
import styled from 'styled-components'

const TagHeader = styled.header`
    margin: 2rem 0;
    font-size: 2rem;
`

export default function Header() {
  return (
    <TagHeader>
        <h1>Elden Ring</h1>
        <span>Bosses Wiki</span>
    </TagHeader>
  )
}
