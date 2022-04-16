import React, { useState } from "react";
import ReactImgPrev from "react-img-prev";
import Form from "components/pages/uploadNft/Form";

type Props = {};

const Index: React.FC<Props> = () => {
  const [files, setFiles] = useState<Obj>({});
  const [values, setValues] = useState<Obj>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <ReactImgPrev files={files.files} setFiles={setFiles}></ReactImgPrev>
      <Form setValues={setValues} onSubmit={onSubmit} />
    </div>
  );
};

export default Index;
