import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import 'react-fine-uploader/gallery/gallery.css'

const uploader = new FineUploaderTraditional({
    options: {
        chunking: {
            enabled: true
        },
        cors: {
            expected: true
        },
        deleteFile: {
            enabled: true,
            endpoint: 'http://localhost:8000/uploads'
        },
        request: {
            endpoint: 'http://localhost:8000/uploads'
        },
        retry: {
            enableAuto: true
        }
    }
})

class UploadComponent extends Component {
    render() {
        return (
          <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>File Upload</h2>
            </div>
              
                <Gallery uploader={ uploader } />
             
          </div>
        )
    }
}





export default UploadComponent
