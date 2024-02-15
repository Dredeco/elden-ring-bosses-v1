import { getBosses, getData } from '@/api/api'
import React, { useState } from 'react'
import styled from 'styled-components'
import { InputContainer } from './styles'

export default function SearchInput({ setResults }) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (value) => {
        setInputValue(value.toLowerCase())
        fetchData(value.toLowerCase())
    }

    const fetchData = async (value) => {
        let data = await getBosses()
        let results = data.filter((boss) => {
            return (
                boss &&
                boss.name &&
                boss.name.toLowerCase().includes(value)
            )
        })
        setResults(results)
    }

    return (
        <InputContainer>
            <input 
            type='text' 
            placeholder='Buscar' 
            onChange={(e) => handleChange(e.target.value)}
            />
        </InputContainer>
    )
}
