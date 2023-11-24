import React, {useState} from 'react'

export default function TextForm(props) {
  const handleupclick = ()=>{
    console.log("handleupclick was used" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted To UpperCase", "success");
  }
  const handlelowclick = ()=>{
    console.log("handleupclick was used" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted To LowerCase", "success");
  }
  const handleclearclick = ()=>{
    console.log("handleupclick was used" + text);
    let newtext ='';
    setText(newtext)
    props.showAlert("Text Cleared", "success");
  }
  const speak = () => {
    let newtext = new SpeechSynthesisUtterance();
    newtext.text = text;
    window.speechSynthesis.speak(newtext);
  }
  const handleonchange = (event)=>{
    console.log("handle on change");
    setText(event.target.value);
  }
  const [text, setText]= useState('');
  // setText("new Text");
  return (<>
  
            <div className = "container">
            <h1>{props.heading}</h1>
        <div className="mb-3">
      
        <textarea className="form-control"   value = {text} onChange = {handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleupclick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelowclick} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearclick} >Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak} >Pronounce Text</button>
            </div>
            <div className="container my-2">
              <h1>Your Text Summary</h1>
              <p> {text.split(" ").length-1} Words {text.length} Characters </p>
              <p> {0.008 * text.split(" ").length - 0.008} minutes Time Required To Read </p>
              <h2>Preview</h2>
              <p>{text.length>0?text :"Enter Text In The Above TextBox To Preview It Here!!"}</p>

            </div>
            </>
  )
}
