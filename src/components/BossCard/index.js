import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Loading from '../Loading'
import { getBosses } from '../../api/api'
import BossesSection, { BossesList, Container, TagBossCard } from './styles'

export default function BossCard() {
    let [isLoading, setIsLoading] = useState(true)
    let [bosses, setBosses] = useState([])

    useEffect(() => {
        const getData = async () => {
            const bossesData = await getBosses(10)
            setBosses(bossesData)
        }
        getData()
        setTimeout(() => (
            setIsLoading(false)
        ), 3000)
    }, [])

    if (isLoading) {
        return <Loading />
    } else {
        return (
        <BossesSection>
            <Container>
                <BossesList>
                    {bosses.map((boss) => {
                    if (boss.image != null) {
                        return (
                        <TagBossCard key={boss.id}>
                            <Image
                                src={`${boss.image}`}
                                width={300}
                                height={120}
                                alt={boss.name}
                            />
                            <h3>{boss.name}</h3>
                            <h4>Location</h4>
                            <span>{boss.location}</span>
                            <Link href={`./boss/${boss.id}`} id={boss.id}>More info</Link>
                        </TagBossCard>
                    )}
                    })}
                </BossesList>
            </Container>
        </BossesSection>
        )
        }        
    }