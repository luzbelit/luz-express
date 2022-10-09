import { Stack, Box, Center, Text } from "@chakra-ui/react"

export function Mapa(){
    return(
        <>
           
                <Box id={'direc'}>
                    <Center marginBottom={'3'}>
                        <Box as='button' 
                            borderRadius={'md'} 
                            bg={'purple.500'} 
                            px={'4'} 
                            h={'10'} 
                            cursor={'default'}
                            _hover={{bg:'purple.700', transition:'0.5s'}}
                            > 
                            <Text fontSize={'xl'} color={'white'} alignItems={'center'}>
                                Dirección
                            </Text>
                        </Box>
                    </Center>
                    <Box marginTop={12} >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.516113392062!2d-58.5218274!3d-34.5404856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7325f502999%3A0x54afa336bacfb7b4!2sLuzExpress%20SRL!5e0!3m2!1ses!2sar!4v1665172624223!5m2!1ses!2sar" width="400" height="300" border='0' loading="lazy">
                    </iframe>
                    </Box>
                </Box>

        </>
    )
}