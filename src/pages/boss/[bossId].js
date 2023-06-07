import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import {getData, getDataById} from '@/api/api'
import Link from 'next/link'
import Loading from '../../components/Loading'
import ChevronLeft from '@/components/Icons/ChevronLeft'

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

const TagBossInfo = styled.section`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    margin: 1rem 2%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: rgba(0,0,0,.8);
    padding: 2rem 2%;
    border: 2px solid goldenrod;
    border-radius: 10px;
    font-size: 1.2rem;
    h1 {
      text-transform: uppercase;
      text-decoration: underline;
      text-decoration-color: goldenrod;
      text-underline-offset: .5rem;
      line-height: 3rem;
    }
    img {
      margin: 1rem 0;
      max-height: 20rem;
      max-width: 50rem;
    }
    span {
      font-style:oblique;
    }
    a {
      background-color: #fff;
      padding: .5rem 1rem;
      border-radius: 10px;
      width: 50%;
      max-width: 15rem;
      margin-top: 1.5rem;
      text-decoration: none;
      color: #000;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
`
const GeneralInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  P {
    color: #ddd;
    strong {
      color: #fff;
    }
  }
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
      <TagBossInfo>
          <Container>
          <h1>{boss.name}</h1>
          <Image 
              src={`${boss.image}`}
              width={300}
              height={120}
              layout='responsive'
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
