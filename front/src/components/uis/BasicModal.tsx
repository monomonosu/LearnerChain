import styled from '@emotion/styled'
import { Modal, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import React from 'react'

const CustomModal = styled(Modal)`
  max-width: 768px;
  margin: auto;
  padding: 20px;
`

const ModalContainer = styled.div`
  background: white;
  padding: 10px 20px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ModalTitle = styled.p`
  font-size: 24px;
  margin: auto 0;
`

const ModalContent = styled.div`
  padding: 30px 0;
`

type ModalProps = {
  open: boolean
  handleClose: () => void
  title?: string
  content?: JSX.Element
}

export const BasicModal: React.FC<ModalProps> = ({ open, handleClose, title, content }) => {
  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </ModalHeader>
        <ModalContent>{content}</ModalContent>
      </ModalContainer>
    </CustomModal>
  )
}
