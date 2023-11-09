import React from 'react'
import { AiOutlineInfoCircle, AiFillGithub,  } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import "./component.css"



const Transition = React.forwardRef(
    function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />
    }
);
const Header = () => {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>

            {/* header */}
            <div className='header'>

                <div className='header_icon' />

                <h2 className='header_title'>
                    Yoda AI
                </h2>

                <div className='header_icon' onClick={handleClickOpen}>
                    <AiOutlineInfoCircle size={16} />
                </div>
            </div>

            {/* dialog */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                
                <DialogTitle textAlign='center' id="alert-dialog-slide-title">
                    Yoda AI
                </DialogTitle>

                <DialogContent>
                    
                    <DialogContentText id="alert-dialog-slide-description">
                        Welcome to Yoda AI, your ultimate AI companion! Yoda is designed to be your go-to solution for a wide range of tasks, from answering questions and providing insights to offering assistance and entertainment.
                    </DialogContentText>

                    <div className='header_dialog_contact'>
                        
                        <DialogContentText id="alert-dialog-slide-contact-title" textAlign="center">
                            Connect With Developer
                        </DialogContentText>

                        {/* icons */}
                        <div className='header_dialog_contact_ctas'>
                            
                            <a href='' className='header_dialog_contact_cta' onClick={null}>
                                <AiFillGithub />
                            </a>

                            <a className='header_dialog_contact_cta'>
                                <FaLinkedinIn />
                            </a>

                            <div className='header_dialog_contact_cta'>
                                <MdOutlineAlternateEmail />
                            </div>

                        </div>
                    </div>

                </DialogContent>

                <DialogActions id='header_dialog_contact_bottom_ctas'>
                    
                    <Button onClick={handleClose}>Close</Button>

                </DialogActions>
            </Dialog>

        </>
    )
}

export default Header
