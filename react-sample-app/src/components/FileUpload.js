import React from 'react';
import classe from './Post.module.css';
import Grid from '@material-ui/core/Grid';

function FileUpload() {
    return (
       <div>
           <div>
                <div>
                    <div>
                        <br /><br />
                            <br />
                            <div>
                                <div className={classe.uploadFile}>
                                    <label > Select File : </label>
                                    <input type="file" name="upload_file"/>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <button className={classe.button} type="submit">Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default FileUpload;