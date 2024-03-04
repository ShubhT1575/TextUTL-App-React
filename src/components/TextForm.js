import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpCLick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
    }
    const handleLoCLick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    props.showAlert("Converted to Lower Case","success")

    }
    const handleClearText = () => {
        let clear = text;
        clear = "";
        setText(clear);
    props.showAlert("Text is Cleared","danger")

    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    props.showAlert("Removed Extra Space","success")

    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard","success")

    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here");
    return (
        <>
    <div className='container'>
        <h1 className='heading'>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text} className="form-control" id="myBox" rows="12" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpCLick} >Convert to UPPER CASE</button>
        <button className="btn btn-primary mx-2
        my2" onClick={handleLoCLick} >Convert to Lower case</button>
        <button className="btn btn-primary mx-2
        my-2" onClick={handleClearText} >Clear Text</button>
        <button className="btn btn-primary mx-2
        my-2" onClick={handleExtraSpace} >Remove Extra Space</button>
        <button className="btn btn-primary mx-2
        my-2" onClick={handleCopy} >Copy Text</button>

    </div>
    <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length-1} words , {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes Read Time</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
