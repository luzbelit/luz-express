import { Grid, GridItem, Stack, Text, Divider, Box } from "@chakra-ui/react";
import { Contacto } from "./contacto";
import { Mapa } from "./mapa";
import { Marcas } from "./marcas";

export function Footer() {

    return(

        <>
        <Stack marginTop={'20'} alignItems={'center'} backgroundColor={'gray.300'} width={['']} >
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)' ,'repeat(3, 1fr)']} colum backgroundColor={'gray.300'} gap={'4'} >

        <GridItem marginTop={'10'} >
        <Mapa />
        </GridItem>

        <GridItem marginTop={'10'}>
        <Marcas />
        </GridItem>

        <GridItem marginTop={'10'}>
            <Contacto />
        </GridItem>

        </Grid>
        <Divider orientation='horizontal' variant={'solid'} />
            <Stack display={'flex'} flexDirection={'row'} >
            <Box display={'flex'} flexDirection={'row'} gap={'1'}>
             <Text color={'GrayText'}>Diseñado por</Text>
             <Text color={'black'}>tutex</Text> 
             </Box>
             </Stack>
        </Stack>
        </>
    )
}