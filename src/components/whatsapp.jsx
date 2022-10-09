import { FloatingWhatsApp } from 'react-floating-whatsapp'

export function Whatsapp(){

    return (
     <>
   <FloatingWhatsApp 
     phoneNumber="+54 9 153 426 5057"
        accountName="Luz Express"
        chatMessage='¿En qué podemos ayudarte?'
        placeholder="Envianos un mensaje"
        statusMessage='En Linea'
        avatar="/src/assets/LOGO.png"
        allowEsc
        allowClickAway
        notification
        notificationSound
   />
    </>
    )
}
