import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../Card'
import { getBosses } from '@/api/api'
import Loading from '../Loading'

const BossSectionMain = styled.section`
    width: 100vw;
    height: 95vh;
    background-color: rgba(0, 0, 0, .3);
    margin-top: 26px;
    padding: 0 2%;
`

const BossSectionContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    height: fit-content;
    max-width: 1280px;
    padding: 1rem 1.5rem;
    border: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > div {
        margin-top: 1rem;
        width: 400px;
        height: 400px;
        max-width: 32%;
        min-width: 32%;
    }
`

export const BossSection = () => {
    let [isLoading, setIsLoading] = useState(true)
    let [bosses, setBosses] = useState([])

    useEffect(() => {
        const getData = async () => {
            const bossesData = await getBosses()
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
        <BossSectionMain>
            <BossSectionContainer>
                {bosses.map((boss) => {
                    return (
                        <Card bossData={boss}/>
                    )
                })}
            </BossSectionContainer>
        </BossSectionMain>
    )
    }
}
