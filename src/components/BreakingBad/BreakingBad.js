import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from "@chakra-ui/react"
import BreakingBadHeader from './BreakingBadHeader'
import BreakingBadCharacterGrid from './BreakingBadCharacterGrid'

function BreakingBad() {
    
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters`)


        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
    }

    fetchItems()
    }, [])

    return (
        <>
            <Container display="flex" justifyContent="center" maxW="container.xl">
                <BreakingBadHeader />
                <BreakingBadCharacterGrid isLoading={isLoading} items={items} />
            </Container>
        </>
    )
}

export default BreakingBad
