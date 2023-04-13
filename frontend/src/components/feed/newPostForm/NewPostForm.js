import React, { useState } from 'react';
import './NewPostForm.css'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const NewPostForm = ({newImg, newPost, handleNewPostChange, handleSubmit, handleImg}) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);  

  
  return (
    <>
      <form className="new-post-form" onSubmit={handleSubmit} encType='multipart/form-data'>
        <div>
          <h1>{currentEmoji || 'select emoji'}</h1>
          <button
            onClick={() => setPickerVisible(!isPickerVisible)}
          > 
            open emoji picker
          </button>

          <div className={isPickerVisible ? 'd-block' : 'd-none'}>
            <Picker
              data={data}
              previewPosition='none'
              onEmojiSelect={(e) => { 
                  setCurrentEmoji(e.native);
                  setPickerVisible(!isPickerVisible);
              }} 
              />
          </div>
          

        </div>
        <input type='text' id='post' className="text-field" placeholder="What do you have in mind?" value={newPost} onChange={handleNewPostChange} />
        <div id="upload-photo-btn-container">
          <input type='file' className="upload-photo-btn" accept=".png, .jpg, .jpeg" id='img' onChange={handleImg} />
          <i className="fa-regular fa-image fa-3x"></i>
          <div>
            {newImg ? <div id='selected-file-notification'></div> : null }
          </div>
        </div>
        <input className="post-submit-btn" type="submit" value="Send"/>
      </form>
    </>
  );
}

export default NewPostForm;