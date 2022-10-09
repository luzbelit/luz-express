import { Image, Button, Stack } from "@chakra-ui/react";
import { useState } from "react"

export function Carousel(){

const images = [`producto1.png`, `producto2.png`, `producto3.png`, `producto4.png`, `producto5.png`, `producto6.png`, `producto7.png`, `producto8.png`, `producto9.png`]
const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState(images[0]);


const selectNewImage = (index, images, next = true) => {
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0)  : (condition ? selectedIndex - 1 : images.length - 1)
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex);
}

const previous = () => {
    selectNewImage(selectedIndex, images, false);
}

const next = () => {
    selectNewImage(selectedIndex, images)
}

return (
    <>
        
        <Image src={(`/src/assets/productos/${selectedImage}`)} alt='producto' />
        <Stack spacing={10} direction='row' align='center'>
        <Button colorScheme='purple' w={'12'} size='sm' onClick={previous}>{"<"}</Button>
        <Button colorScheme='purple' w={'12'} size='sm' onClick={next}>{">"}</Button>
        </Stack>

    </>
)
}