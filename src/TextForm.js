
import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
    function handleUpClick(e) {
        setText(e.target.value);
    }
    function copyContent() {
        navigator.clipboard.writeText(text);

    }
    function handleExtraSpaces() {

        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((e)=>{

            if(e[0] !== undefined){
                joinedWords += e + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    } 
    const countWords = () => {
        let len = 0;
        len = text.split(" ").filter( function(n) { return n !== '' });
        if (len[len.length - 1] === "") {
          return len.length - 1;
        }
        return len.length;
    }

    const countChars = () => {
        let len;
        let count = 0;
        len = text.split(" ");
        for(let i=0; i<len.length; i++) {
            count+=len[i].length;
        }
        return count;
    }
    const updateReText = () => {

        const reverse = text.split("").reverse().join("");
    
        setText(reverse);
    
      };

    return (
        <>
        <div className='form-container'>
        <div className="mb-3 my-4 form-control-lg" data-bs-theme={props.mode}>
            <h3 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control my-3" id="myBox" value={text} rows="9" onChange={handleUpClick} style={{backgroundColor: props.mode==='dark'?'#0a1128':'white', color: props.mode==='dark'?'white':'black'}} placeholder={props.placeHolder}></textarea>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={() => {setText(text.toUpperCase())}}>UpperCase</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={() => {setText(text.toLowerCase())}} >LowerCase</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={() => {copyContent()}}>Copy Text</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={() => {handleExtraSpaces()}}>Remove Spaces</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={() => {updateReText()}}>Reverse Text</button>
        </div>
        <div className='preview' style={{color: props.mode==='dark'?'white':'black'}}>
            <p>The word count is {countWords()}.</p>
            <p>The text is {countChars()} characters long.</p>
            
            <h3>Preview</h3>
            <p>
                {text}
            </p>
        </div>
        </div>

        </>
    );

}


