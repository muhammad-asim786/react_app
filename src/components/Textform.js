import React, { useState } from "react";
let isUpper = false;
let captureButtontext = "";
let buttonText = "Convert to Uppercase";

export default function Textform(props) {
  const [text, setText] = useState("");
  const[renderCharlnt, renderCharlength] = useState(0);
  const[renderWordlnt, renderWordlength] = useState(0);
  const[readwordTime, readwordTimefunc] = useState(0);

  const handleUpClick = () => {
    if (!isUpper) {
      isUpper = true;
      buttonText = "Convert to Lowercase";
      let newText = text.toUpperCase();
      setText(newText);
    } else {
      isUpper = false;
      buttonText = "Convert to Uppercase";
      let newText = text.toLowerCase();
      setText(newText);
    }
  };

  const onchage = (event) => {
    captureButtontext = event.target.value;
    renderCharlength(captureButtontext.length);
    renderWordlength(captureButtontext.split(" ").length - 1);
    readwordTimefunc(captureButtontext.length / 200);
    setText(captureButtontext);
  };

  const clearText=()=>{
    let confirm = window.confirm("Are you sure you want to clear the text?");
    if(confirm){
      setText("");
      renderCharlength(0);
      renderWordlength(0);
      readwordTimefunc(0);
      captureButtontext = "";
    }
    return;
  }

  return (
    <>
      <div className="mb-3 mt-4">
        <textarea
          style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#ffffff', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}
          className="form-control"
          id="MyBox"
          rows="3"
          value={text}
          onChange={onchage}
        />
        <div className="container my-3">
          <button className={`btn btn-outline-primary ${props.mode === 'dark' ? 'btn-dark' : 'btn-light'}`} onClick={handleUpClick}>
            {buttonText}
          </button>
          <button type="button" onClick={clearText} className={`btn btn-outline-primary ${props.mode === 'dark' ? 'btn-dark' : 'btn-light'}`}>clear Text</button>
        </div>
      </div>
      {/* Text Statistics and Preview */}
      <div className={`container my-4 ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className={`card text-center shadow-sm border-0 h-100 ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
              <div className="card-body">
                <h2 className={`card-title text-primary mb-2 fw-bold ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>{renderCharlnt}</h2>
                <p className={`card-text text-muted mb-0 text-uppercase small ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>Characters</p>
              </div>
            </div>
          </div>
          <div className="col-md-4"> 
            <div className={`card text-center shadow-sm border-0 h-100 ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
              <div className="card-body">
                <h2 className={`card-title text-success mb-2 fw-bold ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>{renderWordlnt}</h2>
                <p className={`card-text text-muted mb-0 text-uppercase small ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>Words</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card text-center shadow-sm border-0 h-100 ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
              <div className="card-body">
                <h2 className={`card-title text-info mb-2 fw-bold ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>
                  {readwordTime.toFixed(2)} <span className="fs-6">min</span>
                </h2>
                <p className={`card-text text-muted mb-0 text-uppercase small ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>Reading Time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm border-0">
          <div className={`card-header bg-primary text-white ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <h5 className={`mb-0 fw-bold ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`}>Text Preview</h5>
          </div>
          <div className={`card-body ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <p className={`card-text mb-0 ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} style={{ minHeight: "100px", whiteSpace: "pre-wrap" }}>
                {text.length > 0 ? text : <span className={`text-muted fst-italic ${props.mode === 'dark' ? 'white' : 'dark'}`}>Enter some text above to see the preview here...</span>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
