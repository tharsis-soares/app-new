import React from 'react'
import { Box, SimpleGrid, GridItem } from '@chakra-ui/react'
import BreakingBadCharacterItem from './BreakingBadCharacterItem'

const BreakingBadCharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<SimpleGrid templateColumns="repeat(3, 1fr)" gap={1} m="200">
    
    {items.map((item) => (
            <GridItem h="400" key={item.char_id}>
                <Box mt="1" alignSelf="center" px="32" py="32">
                    <BreakingBadCharacterItem item={item}></BreakingBadCharacterItem>
                    <h1>teste</h1>
                </Box>
            </GridItem>
    ))}</SimpleGrid>)
 
}

export default BreakingBadCharacterGrid
