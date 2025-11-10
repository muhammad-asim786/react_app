import React, { useState } from "react";

export default function About() {
    const [darkMode, setDarkMode] = useState(false);
    
    const getThemeStyles = () => {
        if (darkMode) {
            return {
                color: '#ffffff',
                backgroundColor: '#212529',
                border: '1px solid #495057'
            };
        } else {
            return {
                color: '#212529',
                backgroundColor: '#ffffff',
                border: '1px solid #dee2e6'
            };
        }
    };

    const myStyleState = getThemeStyles();

    const getAccordionButtonStyles = () => {
        if (darkMode) {
            return {
                color: '#ffffff',
                backgroundColor: '#343a40',
                border: '1px solid #495057'
            };
        } else {
            return {
                color: '#212529',
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6'
            };
        }
    };

    const accordionButtonStyle = getAccordionButtonStyles();

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <>
            <style>
                {`
                    #accordionExample .accordion-button::after {
                        ${darkMode 
                            ? `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;`
                            : `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;`
                        }
                    }
                    #accordionExample .accordion-button:not(.collapsed)::after {
                        ${darkMode 
                            ? `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;`
                            : `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;`
                        }
                    }
                `}
            </style>
            <div className="container" style={myStyleState}>
                <h1 className="my-3" style={{ color: myStyleState.color }}>About Us</h1>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ backgroundColor: myStyleState.backgroundColor, borderColor: myStyleState.border }}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={accordionButtonStyle}
                        >
                            Accordion Item #1
                        </button>   
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyleState}>
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: myStyleState.backgroundColor, borderColor: myStyleState.border }}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={accordionButtonStyle}
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyleState}>
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: myStyleState.backgroundColor, borderColor: myStyleState.border }}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={accordionButtonStyle}
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyleState}>
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="ToggleButton my-3">
                <button 
                    onClick={toggleDarkMode} 
                    className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
                >
                    {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
                </button>
                </div>
            </div>
        </>
    );    
}
