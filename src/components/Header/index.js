import React from 'react'
import Image from 'next/image'

import Logo from '../../../public/logo.png'
import SearchInput from '../SearchInput'
import { TagHeader } from './styles'

export default function Header() {
  return (
    <TagHeader>
      <Image 
          src={Logo}
          width={600}
          alt='Elden Ring Logo'
        />
        
        <nav>
          <ul>
            <li>Bosses</li>
            <li>NPCs</li>
          </ul>
        </nav>
    </TagHeader>
  )
}
