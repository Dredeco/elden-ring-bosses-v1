import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Loading from './Loading'
import { getData } from '../api/api'
import SearchInput from './SearchInput'

async function getBosses() {
    let bosses = await getData()
    return bosses
  }

const BossesSection = styled.section`
    width: 100%;
`

const Container = styled.div`
    margin: 1rem 2%;
    max-width: 1280px;
`

const BossesList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 426px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const TagBossCard = styled.li`
    background-color: #000;
    padding: .5rem .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 1px solid gold;
    border-radius: 10px;
    img {
        max-height: 9rem;
    }
    h3 {
        text-transform: uppercase;
        margin: .4rem 0;
        text-decoration: underline;
        text-decoration-color: goldenrod;
        text-underline-offset: .3rem;
    }
    h4 {
        margin: 0;
        border: 0;
        padding: 0;
    }
    span {
        margin-bottom:.7rem;
    }
    a {
        text-decoration: none;
        color: #222;
        background-color: goldenrod;
        padding: .5rem 1rem;
        border-radius: 10px;
        border: 1px solid #444;
        text-transform: uppercase;
        font-weight: 700;
        width: 70%;
        :hover, :active {
            background-color: #222;
            color: #fff;
        }
    }
`


export default function BossCard() {
    let [isLoading, setIsLoading] = useState(true)
    let [bosses, setBosses] = useState([])
  
    useEffect(() => {
        setTimeout(() => (
            getBosses()
            .then((data) => setBosses(data))
        ), )
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
                <SearchInput setResults={setBosses} />
                <BossesList>
                    {bosses.map((boss) => {
                    if (boss.image != null) {
                        return (
                        <TagBossCard key={boss.id}>
                            <Image 
                                src={`${boss.image}`}
                                width={300}
                                height={120}
                                layout='responsive'
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