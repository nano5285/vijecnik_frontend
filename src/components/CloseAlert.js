import { Button } from "@material-tailwind/react";

import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function CloseAlert(props) {

    const { open, handleOpen, handleClose } = props

    return (
        <div>
            <Dialog open={open} handler={handleOpen} dismiss={false} >
                <DialogBody>
                    agenda
                </DialogBody>
                <DialogFooter className='flex flex-row items-center justify-center gap-3'>
                    <Button variant="gradient" color="yellow" onClick={() => handleClose(false)}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>

        </div>
    )
}