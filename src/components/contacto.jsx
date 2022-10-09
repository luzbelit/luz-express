import {Stack, Center, Box, Text, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import {MdCall} from 'react-icons/md'
import { EmailIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'

export function Contacto(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return(
        <>
        <Stack  p={'4'} alignItems={'center'} >
                <Box id={'contacto'}  marginLeft={'10'}  >
                    <Center marginBottom={'12'}>
                        <Box as='button' 
                            borderRadius={'md'} 
                            bg={'purple.500'} 
                            px={'8'} h={'10'} 
                            _hover={{bg:'purple.700', transition:'0.5s'}}
                            cursor={'default'}
                            > 
                            <Text fontSize={'xl'} color={'white'} alignItems={'center'} >
                                Contacto
                            </Text>
                        </Box>
                    </Center>
                    <Stack align={'column'} spacing={6}>

                    <Button colorScheme='whatsapp' variant={'outline'} leftIcon={<FaWhatsapp />} _hover={{bg:'#22c35e', color:'white', border:'none'}}  >
                        whatsapp
                    </Button>
                    
                    <Button colorScheme='facebook' variant={'outline'} leftIcon={<FaFacebook />} _hover={{bg:'#385898', color: 'white', border:'none'}} >
                        Facebook
                    </Button>
                    
                    <Button onClick={onOpen} leftIcon={<EmailIcon />} colorScheme='purple' variant='outline' _hover={{bg:'purple.500', color:'white', border:'none'}}>
                        Email
                    </Button>
                        <AlertDialog isOpen={isOpen} motionPreset={'slideInBottom'} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
                            <AlertDialogOverlay />
                            <AlertDialogContent>
                                <AlertDialogHeader>Nuestro Email es:</AlertDialogHeader>
                                <AlertDialogBody>
                                    info@luzexpress.com.ar
                                </AlertDialogBody>
                                <AlertDialogFooter>
                                    <Button variant={'solid'} colorScheme={'telegram'} ref={cancelRef} onClick={onClose}>
                                        Ok
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    <Button onClick={onOpen} leftIcon={<MdCall />} colorScheme='purple' variant='outline' _hover={{bg:'purple.500', color:'white', border:'none'}}>
                        Llamanos
                    </Button>
                    <AlertDialog isOpen={isOpen} motionPreset={'slideInBottom'} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
                            <AlertDialogOverlay />
                            <AlertDialogContent>
                                <AlertDialogHeader>Nuestro Telefono es:</AlertDialogHeader>
                                <AlertDialogBody>
                                    155461345754
                                </AlertDialogBody>
                                <AlertDialogFooter>
                                    <Button variant={'solid'} colorScheme={'telegram'} ref={cancelRef} onClick={onClose}>
                                        Ok
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </Stack>
                </Box>
            </Stack>

        </>
    )
}