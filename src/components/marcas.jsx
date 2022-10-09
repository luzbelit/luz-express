import {Image,  ListItem, UnorderedList, Box, Stack, Text, Center, Link } from '@chakra-ui/react'
 

export function Marcas(){
    const listaMarcas1 = [{id:0, name:"ACQUALUCE.png", url:"https://acqualuce.com.ar/"},
                          {id:1, name: "ARGEMPLAS.png", url:"https://www.argenplas.net/"},
                          {id:2, name: "CONEXTUBE.png", url:"https://conextube.com/"},
                          {id:3, name: "GE.png", url:"https://www.ge.com/latam/"},
                          {id:4, name: "LUMENAC4.png", url:"https://lumenac.com.ar/"},];
    const listaMarcas2 = [ {id:5, name:"MACROLED.png", url:"https://macroled.com.ar/"},
                           {id:6, name:"OSRAM.png", url:"https://www.osram-latam.com/am/"},
                           {id:7, name: "PHILIPS.png", url:"https://www.philips.com.ar/"},
                           {id:8, name:"SCHNEIDER.png", url:"https://www.se.com/ar/es/"}]
    return (
       <>
            <Stack p={'4'} alignItems={'center'} >
            <Box >

            <Center marginBottom={'3'}  >
                 <Box as='button' 
                      borderRadius={'md'}
                      bg={'purple.500'}
                      px={'4'} h={'10'}
                      _hover={{bg:'purple.700', transition:'0.5s'}}
                      cursor={'default'}
                      > 
                    <Text fontSize={'xl'} color={'white'} alignItems={'center'}> Marcas </Text>
                 </Box>
            </Center>


                <Stack display={'flex'}  flexDirection={'row'} gap={20} justifyContent={'center'} alignItems={'center'}>
        <UnorderedList >
            {listaMarcas1.map(marca => {
            return ( 
               <ListItem key={marca.id} style={{listStyle: 'none'}} >
                    <Link href={marca.url}>
                    <Image src={(`/src/assets/marcas/${marca.name}`)} width={'24'} h={'24'} alt={`${marca.name} (Logo de la marca y formato de la imagen.)`} />
                    </Link>
               </ListItem>
                 )
                })
            }
        </UnorderedList>
        
        <UnorderedList>
            {listaMarcas2.map(marca => {
            return ( 
               <ListItem key={marca.id} style={{listStyle: 'none'}}>
                <Link href={marca.url}>
                    <Image src={(`/src/assets/marcas/${marca.name}`)} width={'24'} h={'24'} alt={`${marca.name} (Logo de la marca y formato de la imagen.)`} />
                </Link>
               </ListItem>
                 )
                })
            }
        </UnorderedList>
        </Stack>
        </Box>
        </Stack>
        </>
    )
}
