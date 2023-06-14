import { getData } from '@/api/api'
import React, { useState } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    input {
        width: 70%;
        max-width: 500px;
        height: 2rem;
        padding-left: .5rem;
        border-radius: 8px;
    }
`

export default function SearchInput({ setResults }) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (value) => {
        setInputValue(value.toLowerCase())
        fetchData(value.toLowerCase())
    }

    const fetchData = async (value) => {
        let data = await getData()
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
