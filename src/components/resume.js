import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <object width="100%" height="100%" type="application/pdf" data="/resume.pdf">
                    <p>Ah No! The PDF cannot be displayed.</p>
                </object>
            </div>
        )
    }
}

export default Resume;