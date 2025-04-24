import React, { useRef, useState, DragEvent, ChangeEvent } from 'react';
import { FileUploadProps } from './types';
import clsx from 'clsx';

export const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  accept = '',
  multiple = false,
  maxSize,
  onFilesChange,
  disabled = false,
  error,
  helperText,
  className,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files);
    const valid = maxSize
      ? arr.filter((f) => f.size <= maxSize)
      : arr;
    onFilesChange(valid);
    setPreviews(valid.map((f) => URL.createObjectURL(f)));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    handleFiles(e.dataTransfer.files);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div className={clsx('space-y-2', className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className={clsx(
          'flex flex-col items-center justify-center border-2 rounded-md p-4 transition-colors',
          disabled
            ? 'bg-gray-100 border-gray-200 cursor-not-allowed'
            : error
            ? 'border-red-500 bg-red-50'
            : 'border-dashed border-gray-300 bg-white hover:border-blue-400',
          'focus-within:border-blue-500',
        )}
        role="button"
        tabIndex={0}
        onClick={() => !disabled && fileInputRef.current?.click()}
        onKeyPress={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            fileInputRef.current?.click();
          }
        }}
        aria-disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
      >
        <input
          id={id}
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={onChange}
          className="hidden"
        />
        <p className="text-sm text-gray-500">
          Drag & drop files here, or click to browse
        </p>
      </div>

      {previews.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {previews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Preview ${idx + 1}`}
              className="h-16 w-16 object-cover rounded"
            />
          ))}
        </div>
      )}

      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="text-xs text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
