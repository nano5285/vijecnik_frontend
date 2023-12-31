import { Button } from "@material-tailwind/react";
import {
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function ResultAlert(props) {
    const { open, handleClose, yesNum, noNum, abstrainedNum } = props;

    return (
        <div>
            <Dialog open={open} dismiss={false}>
                <DialogBody className='w-full flex flex-col items-center'>
                    Result of Voting
                    <div className='w-full flex flex-row gap-5 justify-center mt-[20px]'>
                        <div className='basis-1/3 bg-[blue] p-[10px] rounded-md text-[#FFF] text-center'>
                            {abstrainedNum}
                        </div>
                        <div className='basis-1/3 bg-[green] p-[10px] rounded-md text-[#FFF] text-center'>
                            {yesNum}
                        </div>
                        <div className='basis-1/3 bg-[red] p-[10px] rounded-md text-[#FFF] text-center'>
                            {noNum}
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter className='flex flex-row items-center justify-center gap-3'>
                    <Button variant="gradient" color="yellow" onClick={() => handleClose()}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}
