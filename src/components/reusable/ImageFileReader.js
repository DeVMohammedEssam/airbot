import React from "react";

const ImageFileReader = props=>(
<div>
<div className="upload-image">
 <input name="imageFileReader"  type="file" className="upload-image__file" onChange={props.onChange} />
  <div className="upload-image__overflow">
    <i className="fa fa-camera fa-2x"></i>
          <p>upload image </p>
  </div>
</div>
</div>

);

export default ImageFileReader;
  
  