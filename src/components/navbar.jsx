import { Box, Heading, Link, Stack, Button } from "@chakra-ui/react"
import { MdOutlineEditNote, MdContactPage } from 'react-icons/md'
import {BiMap} from 'react-icons/bi'



export function Navbar(){
    return (
    <>
        <Stack display="flex" flexDirection="row" justifyContent="space-around" boxShadow="0 0 5px grey" p={1} w={[800,940,1010, 1044,'100%']}>
    
        <Box display="flex" alignItems="center" p={'3'} >
            <Link marginLeft={3} cursor="pointer" _hover={{ textDecoration: "none" }}>
                <Heading color={'#48487F'} _hover={{color: '#6B46C1'}}>
                    Luz Express
                </Heading>
            </Link>
        </Box>
        
        <Box display="flex" alignItems="center" gap={5} >
        <Link href="#cotizacion" cursor="pointer" _hover={{ textDecoration: 'none' }} > 
            <Button leftIcon={<MdOutlineEditNote/>} colorScheme={'purple'} size='sm' variant={'outline'} >
               
                Pedir una Cotizacion 
                </Button>
                </Link>
            

            <Link href="#contacto" cursor="pointer" _hover={{ textDecoration: 'none' }} > 
            <Button leftIcon={<MdContactPage/>} colorScheme={'purple'} size='sm' variant={'outline'} >
                Contacto 
                </Button>
                </Link>
            

            <Link href="#direc" cursor="pointer" _hover={{ textDecoration: 'none' }} >
            <Button leftIcon={<BiMap/>} colorScheme={'purple'} size='sm' variant={'outline'} >
                Como Llegar 
                </Button>
                </Link>
            

        </Box>
    </Stack>
    </>
    )
}