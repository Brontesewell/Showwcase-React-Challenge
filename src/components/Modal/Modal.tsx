import './Modal.css';
import styled from 'styled-components';
import { color, ColorProps, space } from 'styled-system'
import React, { FC } from 'react'

const ModalHeader = styled.header`
padding: 1rem;
background: #a6a6a6;;
color: white;
`

const ModalHeaderText = styled.h1`
margin: 0px;
font-size: 1.45rem;
`

const ModalContent = styled.section`
padding: 1rem
`

const ModalActions =  styled.section`
display: flex;
justify-content: flex-end;
padding: 1rem;
`

const Button = styled.button<ColorProps>`
${color}
`

interface Props {
  title: String
  onCancel:  () => void;
  confirmText: String;
  children: any
  onConfirm: any;
}

const Modal: FC<Props> = ({ onConfirm, title, onCancel, confirmText, children }: Props) => {
  return (
   
  <div className="modal">
    <ModalHeader>
    <ModalHeaderText >{title}</ModalHeaderText>
    </ModalHeader>
    <ModalContent >{children} </ModalContent>

    <ModalActions>
      <Button type="submit" color="white" bg="black" className="button" onClick={onCancel}>
          Cancel
      </Button>
      
      < Button type="submit" color="white" bg="black" className="button" onClick={onConfirm}>
        {confirmText}
      </Button> 
            
        
    </ModalActions>
  </div>
  )
}


export default Modal;

