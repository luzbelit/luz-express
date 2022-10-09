
import {  Stack, Text } from "@chakra-ui/react";
import { Whatsapp } from "./whatsapp";
import {Carousel} from '/src/components/carousel' 
import {Cotizacion} from '/src/components/cotizacion'

export function Container (){


    return (
        <>
            <Stack display='flex' justifyContent='center' alignItems='center' marginTop={50} spacing={3} w={[800,800,900,'100%']}>
                <Text fontSize='4xl' textAlign={'center'}> 
                    Iluminación & Eléctricidad 
                </Text>
            </Stack>
            <Cotizacion />
         <Stack marginTop={10} display='flex' alignItems={'center'} justifyContent={'center'} w={[750,800, 900, '100%']}>
            <Text as='b' color={'purple.600'} fontSize={'xl'} > Galeria </Text>
            <Carousel />
          </Stack>
         <Whatsapp/>
        </>

    )
}