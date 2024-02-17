import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {getBossById, getBosses} from '@/api/api'
import Link from 'next/link'
import Loading from '../../components/Loading'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import { Container, GeneralInfo, TagBossInfo } from './styles'

export async function getStaticPaths() {
  let bosses = await getBosses()
  
  let paths = bosses.map((boss) => {
    return {
      params: {bossId: boss.id}
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.bossId
  let boss = await getBossById(id)

  return {
    props: { boss: boss }
  }
}



function BossInfo({ boss }) {
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
      <TagBossInfo>
          <Container>
          <h1>{boss.name}</h1>
          <Image 
              src={`${boss.image}`}
              width={500}
              height={250}
              alt={`${boss.name}`}
          />
          <span>"{boss.description}"</span>
          <GeneralInfo>
            <p><strong>Location:</strong> {boss.location}</p>
            <p><strong>Region:</strong> {boss.region}</p>
            <p><strong>Runes:</strong> {boss.drops[0]}</p>
            <p><strong>Item:</strong> {boss.drops[1]}</p>
          </GeneralInfo>

          <Link href='/'><ChevronLeft /> BACK</Link>
        </Container>
      </TagBossInfo>
    )
}

export default BossInfo