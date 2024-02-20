import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Card'
import { getBosses } from '@/api/api'
import Loading from '../Loading'
import { AppContext } from '@/context/AppContext'
import { BossSectionContainer, BossSectionMain } from './styles'

export const BossSection = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [bosses, setBosses] = useState([])
    const {filter} = useContext(AppContext)
    const [pageLimit, setPageLimit] = useState(10)

    useEffect(() => {
        const getData = async () => {
            const bossesData = await getBosses(pageLimit)
            setBosses(bossesData)
        }
        getData()
        setTimeout(() => (
            setIsLoading(false)
        ), 2000)
    }, [filter, pageLimit])

    const handleLoadMore = () => {
        setPageLimit(pageLimit + 9)
    }

    if (isLoading) {
        return <Loading />
    } else {
    return (
        <BossSectionMain>
            <BossSectionContainer>
                {(filter.length == 0 ? bosses : filter).map((boss) => {
                    return (
                        <Card bossData={boss}/>
                    )
                })}
            </BossSectionContainer>
            <button onClick={handleLoadMore}>Load more</button>
        </BossSectionMain>
    )
    }
}
