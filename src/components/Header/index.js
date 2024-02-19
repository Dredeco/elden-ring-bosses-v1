import React, { useContext } from 'react'
import Image from 'next/image'

import Logo from '../../../public/logo.png'
import TagHeader from './styles'
import { AppContext } from '@/context/AppContext'

export default function Header() {
  const {setPage} = useContext(AppContext)

  const handleBosses = () => {
    setPage("boss")
  }

  const handleNPCs = () => {
    setPage("npc")
  }

  return (
    <TagHeader>
      <Image 
          src={Logo}
          width={600}
          alt='Elden Ring Logo'
          style={{objectFit: "contain"}}
        />
        <div>
          <button onClick={handleBosses}>Bosses</button>
          <button onClick={handleNPCs}>NPCs</button>
        </div>
    </TagHeader>
  )
}
