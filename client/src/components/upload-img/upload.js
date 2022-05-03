import React from "react";

export default function UploadFile() {
  return (
    <div>
      <form
        action="http://localhost:5000/upload"
        method="POST"
        enctype="multipart/form-data"
      >
        <input type="file" name="picture" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
