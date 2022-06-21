import React, {useState} from 'react';
//import axios, { Axios } from 'axios';

function UploadPhoto(props){

    const[fileInputState, setFileInputState] = useState('');
    const[previewSource, setPreviewSource] = useState();

    const selectedFile = props.photo;
    const setSelectedFile = props.setPhoto;
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setFileInputState(file.filename);
    }

    const previewFile = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);//convert image to url
        reader.onloadend = () =>{
            setPreviewSource(reader.result);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!previewSource)return;
        uploadImage(previewSource);
        
    }

    const uploadImage =  (base64EncodedImage) => {
        console.log(base64EncodedImage);
        setSelectedFile(base64EncodedImage)
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="form">
            <input type="file" 
                    name="image"  
                    onChange={handleFileChange} 
                    value={fileInputState} data={selectedFile} className="form-input"
                     />
            <button className="btn" type="submit">submit</button>
        </form>
        {previewSource && (
            <img src={previewSource} alt="chosen"
            style={{height:'300px'}} />
        )}
        </div>
    )
}

export default UploadPhoto;