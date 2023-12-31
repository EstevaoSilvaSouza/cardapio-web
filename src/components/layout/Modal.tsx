
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  

interface IModalCustom  {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
    onToggle?: () => void,
    element?: JSX.Element | JSX.Element[],
    size?:string;
    titleModal?:string;
}

const ModalCustom = ({ titleModal,isOpen, onClose, element, size }: IModalCustom) => {
  return (
    <Modal size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={{ width: '10000%', maxWidth: '800px' , height:'auto'}}>
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {element}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Fechar
          </Button>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


export default ModalCustom