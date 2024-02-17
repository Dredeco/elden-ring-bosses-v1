import React from 'react'
import Image from 'next/image'

import Logo from '../../../public/logo.png'
import TagHeader from './styles'

export default function Header() {
  return (
    <TagHeader>
      <Image 
          src={Logo}
          width={600}
          alt='Elden Ring Logo'
        />
        <div>
          <button>Bosses</button>
          <button>NPCs</button>
        </div>
    </TagHeader>
  )
}
