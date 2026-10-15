import ReactNode from 'react'
import type { ComponentProps, HTMLAttributes, ReactElement } from "react";
import { cn } from "../Utils/utils";

interface InputProps {
    labelstr? : string;
    str: string;
    atype? : string;
}

export type BoxProps = HTMLAttributes<HTMLDivElement> & ComponentProps<'button'>;

export function InputBox({labelstr, str, atype="text"} : InputProps) {
    return(
    <div className='text-center justify-center w-1/3 align-middle mt-2 mb-2'>
        {labelstr}
        <div className=" border-2 rounded-2xl">
        <label htmlFor={str}></label>
         <input type={atype} placeholder={str} name={str} required className='w-full p-2'></input>
        </div>
        
    </div>
    );    
}



export function ButtonBox({ type = 'submit', className,children, ...props }: BoxProps) {
    return(
        <button type={type} className={cn("bg-foreground text-white text-center justify-center rounded-2xl w-1/4 p-2 mt-4 mb-4",
         className)}>
            {children}
        </button>
    );
}