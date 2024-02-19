import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Card'
import { getBosses, getNPC } from '@/api/api'
import Loading from '../Loading'
import { AppContext } from '@/context/AppContext'
import { BossSectionContainer, BossSectionMain } from './styles'

export const NPCSection = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [npcs, setNpcs] = useState([])
    const {filter} = useContext(AppContext)
    const [pageLimit, setPageLimit] = useState(10)

    useEffect(() => {
        const getData = async () => {
            const bossesData = await getNPC(pageLimit)
            setNpcs(bossesData)
        }
        getData()
        setTimeout(() => (
            setIsLoading(false)
        ), 2000)
    }, [filter, pageLimit])

    const handleLoadMore = () => {
        setPageLimit(pageLimit + 10)
    }

    if (isLoading) {
        return <Loading />
    } else {
    return (
        <BossSectionMain>
            <BossSectionContainer>
                {(filter.length == 0 ? npcs : filter).map((npc) => {
                    return (
                        <Card bossData={npc}/>
                    )
                })}
            </BossSectionContainer>
            <button onClick={handleLoadMore}>Carregar mais</button>
        </BossSectionMain>
    )
    }
}
