import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Logo from '../../public/logo.png'

const TagHeader = styled.header`
    margin: 2rem 0;
    width: 100%;
    padding: 0 1rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      max-width: 500px;
    };
    span {
      text-transform: uppercase;
      font-weight: 700;
    }
`

export default function Header() {
  return (
    <TagHeader>
        <Image 
          src={Logo}
          widht={200}
          height={50}
          layout='responsive'
        />
        <span>Boss Wiki</span>
    </TagHeader>
  )
}
