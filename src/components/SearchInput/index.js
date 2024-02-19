import { getBosses, getData } from '@/api/api'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { InputContainer } from './styles'
import { AppContext } from '@/context/AppContext'

export default function SearchInput() {
    const {setFilter} = useContext(AppContext)

    const handleChange = (value) => {
        setFilter(value.toLowerCase())
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
