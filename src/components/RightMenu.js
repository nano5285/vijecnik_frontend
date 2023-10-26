import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import OpenAlert from './OpenAlert';
import { socket } from '../utils/socket';
const userData = [
    {
        name: "User 1"

    },
    {
        name: "User 2"

    },
    {
        name: "User 3"

    },
    {
        name: "User 4"

    },
    {
        name: "User 5"

    },
    {
        name: "User 6"

    },
    {
        name: "User 7"

    }
    ,
    {
        name: "User 8"

    }
    ,
    {
        name: "User 9"

    }
    ,
    {
        name: "User 9"

    },
    {
        name: "User 9"

    },
    {
        name: "User 9"

    }
    ,
    {
        name: "User 9"

    },
    {
        name: "User 9"

    }

]
export default function RightMenu(props) {
    const { admin } = props;

    const [open, setOpen] = useState(false)

    const sendVoteStart = () => {
        // setOpen(!open);
        socket.emit("message", "Hello World!")
    }

    return (
        <div className='flex flex-col justify-between w-[600px] bg-[#fff] border-[1px] py-[20px]'>
            <div className='overflow-y-scroll'>
                {
                    userData.map((item) => {
                        return (
                            <div className='flex h-[50px] border-[1px] '>
                                <div className='flex items-center justify-center w-[60px] h-[50px] bg-[#aaa]'>
                                    <div className='w-[30px] h-[30px] bg-[#aaa] border-[3px] border-[#FFF] rounded-full'>

                                    </div>
                                </div>
                                <div className='flex items-center px-[20px] text-[20px] text-[#222]'>
                                    {item.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                admin &&
                <div className=' flex flex-row p-[10px] justify-between '>
                    <Button className='w-[120px] bg-[#0ff]' onClick={sendVoteStart}>
                        Open
                    </Button>
                    <Button className=' w-[120px] bg-[#0f0]'>
                        Reset
                    </Button>
                </div>
            }
            <OpenAlert open={open} handleOpen={sendVoteStart} />
        </div>
    )
}