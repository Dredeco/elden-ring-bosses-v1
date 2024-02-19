import Image from 'next/image'
import React, { useContext } from 'react'
import { TagCard } from './styles'
import Link from 'next/link'
import { AppContext } from '@/context/AppContext'

export const Card = ({bossData}) => {
    const {page} = useContext(AppContext)

    if(bossData.image != null) {
        return (
            <TagCard>
                <Image 
                    src={`${bossData.image}`}
                    width={300}
                    height={120}
                    alt={bossData.name}
                />
                <h3>{bossData.name}</h3>
                <h4>Location</h4>
                <span>{bossData.location}</span>
                {page == "boss" ? 
                <Link href={`./boss/${bossData.id}`} id={bossData.id}>More info</Link> 
                :
                <Link href={`./npc/${bossData.id}`} id={bossData.id}>More info</Link> 
                }
            </TagCard>
        )
    }
}
