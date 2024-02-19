import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {getAllBosses, getAllNPC, getBossById, getNPCById} from '@/api/api'
import Link from 'next/link'
import Loading from '../../components/Loading'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import { Container, GeneralInfo, TagBossInfo } from './styles'
import Head from 'next/head'

export async function getStaticPaths() {
    let npcs = await getAllNPC()
    
    let paths = npcs.map((npc) => {
        return {
            params: {npcId: npc.id}
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.npcId
    let npc = await getNPCById(id)

    return {
        props: { npc: npc }
    }
}

function BossInfo({ npc }) {
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => (
        setIsLoading(false)
        ), 3000)
    }, [])

    if (isLoading) {
        return <Loading />
    }
    return (
        <>
        <Head>
            <title>{npc.name} - NPC Info</title>
        </Head>
        <TagBossInfo>
            <Container>
            <h1>{npc.name}</h1>
            <Image 
                src={`${npc.image}`}
                width={500}
                height={250}
                alt={`${npc.name}`}
            />
            <span>"{npc.quote}"</span>
            <GeneralInfo>
                <p><strong>Location:</strong> {npc.location}</p>
                <p><strong>Role:</strong> {npc.role}</p>
            </GeneralInfo>

            <Link href='/'><ChevronLeft /> BACK</Link>
            </Container>
        </TagBossInfo>
        </>
    )
}

export default BossInfo