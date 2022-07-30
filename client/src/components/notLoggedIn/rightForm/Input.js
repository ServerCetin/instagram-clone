import {useEffect, useState} from "react";

export default function Input({label, type = 'text', ...props}) {

    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if (show) {
            setType('text')
        } else if (type === 'password') {
            setType('password')
        }
    }, [show])

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
            <input required={true} type={inputType} className="px-2 outline-none text-xs w-full h-[38px] valid:pt-[10px] peer" {...props}/>
            <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value && (
                <div type="button" onClick={() => setShow(show => !show)} className="h-full cursor-pointer select-none flex items-center text-sm font-semibold pr-2">
                    {show ? 'Hide' : 'Show'}
                </div>
            )}
        </label>
    )
}