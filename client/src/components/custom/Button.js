export default function Button({type = "button", children, ...props}){
    return(
        <button type={type} {...props}
                className="w-full flex justify-center items-center gap-x-2 h-[30px] mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">{children}
        </button>
    )
}