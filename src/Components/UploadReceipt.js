import React from "react";

const UploadReceipt = props => {
  return (
    <div className="uploadDoc">
      <div className="row">
        <div className="offset-md col-md-6">
          <form className="form-group files">
            <div className="form-control-file">
              <label className="lead">Upload Your Receipt</label>
            </div>
            <div>
              <input
                type="file"
                className="form-control-file "
                onChange={props.handleUpload}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadReceipt;
