import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'
import {getData, getDataById} from '@/api/api'
import Link from 'next/link'
import Loading from '../../components/Loading'

export async function getStaticPaths() {
  let bosses = await getData()
  
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
  let boss = await getDataById(id).then((data) => (data))

  return {
    props: { boss: boss }
  }
}

const Container = styled.div`
    margin: 1rem 2%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
`
const GeneralInfo = styled.div`
`

export default function BossInfo({ boss }) {
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
      <Container>
        <h1>{boss.name}</h1>
        <Image 
            src={`${boss.image}`}
            width={300}
            height={120}
            objectFit='cover'
            objectPosition='center'
        />
        <span>{boss.description}</span>
        <GeneralInfo>
          <p><strong>Location:</strong> {boss.location}</p>
          <p><strong>Region:</strong> {boss.region}</p>
          <p><strong>Runes:</strong> {boss.drops[0]}</p>
          <p><strong>Item:</strong> {boss.drops[1]}</p>
        </GeneralInfo>

        <Link href='/'>Voltar</Link>
      </Container>
    )
}
