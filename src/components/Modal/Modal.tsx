import './Modal.css';
import styled from 'styled-components';
import { space } from 'styled-system';
import React, { FC } from 'react'

const ModalHeader = styled.header`
padding: 1.5rem;
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

interface IProps {
  title: String
  canCancel: any
  canConfirm: any
  onCancel:  () => void;
  confirmText: String;
  children: any
  onConfirm: any;
}

const Modal: FC<IProps> = ({ onConfirm, title, canCancel, canConfirm, onCancel, confirmText, children }: IProps) => {
  return (
   
  <div className="modal">
    <ModalHeader>
    <ModalHeaderText >{title}</ModalHeaderText>
    </ModalHeader>
    <ModalContent >{children} </ModalContent>

    <ModalActions>
        <button className="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="button" onClick={onConfirm}>
            {confirmText}
        </button>
    </ModalActions>
  </div>
  )
}


export default Modal;

