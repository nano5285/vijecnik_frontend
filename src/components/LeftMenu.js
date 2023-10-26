import CustomButton from './CustomButton';
import { useState, useEffect } from 'react';

export default function LeftMenu(props) {
    const { data } = props
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className='flex flex-col w-[600px] bg-[#ddd] border-[1px] px-[20px] pt-[40px] overflow-y-scroll '>
            {
                data.map((item, index) => {
                    return (
                        <CustomButton selected={index === selectedIndex} onClick={() => { setSelectedIndex(index) }} >
                            <div className='text-[#000] text-left'>
                                {item.name}
                            </div>
                        </CustomButton>)
                })
            }
        </div>
    )
}