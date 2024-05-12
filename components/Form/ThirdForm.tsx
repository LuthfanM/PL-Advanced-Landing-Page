import React, { useState, useCallback } from "react";

const ThirdForm: React.FC = () => {
  const [dragging, setDragging] = useState<boolean>(false);

  const handleDragIn = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        console.log(e.target.files);
      }
    },
    []
  );

  return (
    <div className="space-y-4 w-full h-full  text-white">
      <div className="mb-6 w-full">
        <label htmlFor="identity-experience" className="block mb-2 align-top">
          Help us verify your identity by uploading a photo of your ID/KTP or
          Passport
        </label>
      </div>
      <div className="bg-transparent">
        <div
          className={`p-4 border-2 text-center flex flex-col ${
            dragging ? "bg-gray-700" : "bg-neutralBlack60"
          }`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <span className="font-bold text-base leading-[120%]">
            Drag & Drop
          </span>
          <span className="leading-[150%] pt-2">
            or select files from device max. 2MB
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            accept="image/*"
            multiple={false}
          />
          <div className="flex items-end self-center">
            <button
              className="mt-6 text-white font-bold underline"
              onClick={() =>
                document.querySelector("input[type='file']")?.click()
              }
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
