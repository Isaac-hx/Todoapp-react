export default function FormInput({onChangeInput,input,onUpdateItem}){
    return(
        <div role="form-input" className={`container flex gap-3`}>
            <input onChange={onChangeInput} value={input} className={`w-full py-2 px-1 bg-slate-50 outline-none rounded-none  border-2`} placeholder={`Enter Your work...`}/>
            <button onClick={onUpdateItem} className={`text-2xl w-14 bg-sky-500 hover:bg-sky-700 text-white`}>+</button>
        </div>

    )
}