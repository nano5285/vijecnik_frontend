import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';

export default function MainContent(props) {

    return (
        <div className='w-full bg-[#FFF]'>
            <object data="http://127.0.0.1:5005/api/pdf" type="application/pdf" width="100%" height="100%">
                {/* <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p> */}
            </object>
        </div>
    )
}