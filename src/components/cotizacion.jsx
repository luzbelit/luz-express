import { Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, useDisclosure, Textarea, FormHelperText} from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import React, { useState } from 'react'
import { helpHttp } from '../helpers/httpHelp';
import {RiMailSendLine} from 'react-icons/ri'


export function Cotizacion (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [response, setResponse] = useState(null);

    const onSubmit = (values) => { 
        if(Object.keys(errors).length === 0) {
            alert(`el formulario se ha enviado correctamente`)
            helpHttp()
            .post("https://formsubmit.co/ajax/tutexdev@gmail.com", {
                body:values,
                headers:{
                    "Content-type":"application/json",
                    Accept: "application/json",
                }, 
            })
            .then(res=> {
                setResponse(true),
                onClose()
            });
        } else {
            alert(`Se han detectado errores.`)
        }
}

    return (
        <>
         
            <Box id={'cotizacion'} display={'flex'} justifyContent={'center'}  marginTop={10}  w={[750,830,910,'100%']}>
            <Button rightIcon={<RiMailSendLine/>} colorScheme='purple' onClick={onOpen}>PEDI TU COTIZACIÓN</Button>
            
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>Solicita tu cotización</ModalHeader>
                        <ModalCloseButton />
                    
                    <ModalBody pb={6}>
                        <FormControl isInvalid={errors.nombre} isRequired id='nombre'>
                            <FormLabel>Nombre</FormLabel>
                            <Input autoComplete='off' ref={initialRef} placeholder='Nombre' {...register('nombre', {required: true})} />
                            <FormHelperText>
                                Ingrese su nombre
                            </FormHelperText>
                        </FormControl>

                        <FormControl mt={4} id='telefono' >
                            <FormLabel>Telefono</FormLabel>
                            <Input autoComplete='off' type='number' placeholder='Ingresa tu numero de contacto' {...register('telefono')} />
                        </FormControl>

                        <FormControl isInvalid={errors.email} isRequired mt={4} id='email'>
                            <FormLabel>Correo Electronico</FormLabel>
                            <Input autoComplete='off' type='email' placeholder='Email' {...register('email', {required: true})} />
                            <FormHelperText>
                                Ingrese su Email
                            </FormHelperText>
                        </FormControl>

                        <FormControl isInvalid={errors.comentario} isRequired mt={4} id='comentario'>
                            <FormLabel>¿En qué podemos ayudarte?</FormLabel>
                            <Textarea autoComplete='off' type='text' placeholder='Quisiera obtener información acerca de la disponibilidad y precios de sus productos.' {...register('comentario', {required: true})} />
                            <FormHelperText>
                                Envie su consulta
                            </FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>             
                        <Button type='submit' colorScheme='blue' mr={3}>Enviar</Button> 
                        <Button colorScheme={'red'} onClick={onClose}>Cerrar</Button>
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            </Box>
        </>
    )
}