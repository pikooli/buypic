import React, { useState } from "react";
import ReactImgPrev from "react-img-prev";

type Props = {};

const UploadPage: React.FC<Props> = () => {
  const [files, setFiles] = useState<Obj>({});
  return <ReactImgPrev files={files.files} setFiles={setFiles}></ReactImgPrev>;
};

export default UploadPage;
