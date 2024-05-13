import SvgFileIcon from "@/icons/FileIcon";
import React from "react";

interface FileUploadedFieldProps {
  title: string;
  size: string;
  onClose: () => void;
}

const FileUploadedField: React.FC<FileUploadedFieldProps> = ({
  title,
  size,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-2 rounded">
      <div className="flex items-center p-4">
        <SvgFileIcon className="w-4 h-4" />
      </div>
      <div className="flex flex-col pr-4 items-start">
        <span>{title}</span>
        <span className="text-gray-400 text-sm mr-2">{size}</span>
      </div>
      <button onClick={onClose} className="text-red-500 hover:text-red-700">
        X
      </button>
    </div>
  );
};

export default FileUploadedField;
