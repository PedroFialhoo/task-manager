function Button(props){
    return(
        <button 
        className="bg-slate-500 text-white p-2 rounded-md hover:bg-slate-700 " 
        {...props}
        >
            {props.children}
        </button>
    )
}

export default Button