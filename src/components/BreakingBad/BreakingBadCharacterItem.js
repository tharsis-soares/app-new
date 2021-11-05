import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

const BreakingBadCharacterItem = ({ item }) => {
    return (
        <Flex direction="column">
                        <Image src={item.img} alt="Segun Adebayo" />
                        <Flex rounded="xl" mr={1} direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Text color="white" p="1" mt="1" fontSize="xl" fontWeight="semibold">Nome: {item.name}</Text>
                        <Text color="white" p="1" mt="1" fontSize="xl" fontWeight="semibold">Apelido: {item.nickname}</Text>
                        <Text color="white" p="1" fontSize="xl" fontWeight="semibold">{item.portrayed}</Text>
                        <Text color="white" p="1" fontSize="xl" fontWeight="semibold">{item.birthday}</Text>
                        <Text color="white" p="1" fontSize="xl" fontWeight="semibold">{item.status}</Text>

                        </Flex>
                    </Flex>
    )
}

export default BreakingBadCharacterItem