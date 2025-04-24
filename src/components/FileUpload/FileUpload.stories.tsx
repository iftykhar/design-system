import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Data Entry/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FileUpload** component supports drag-and-drop or click-to-browse file selection, previews, size/type validation, and accessibility via ARIA attributes.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        id="file-upload"
        label="Upload Documents"
        accept=".pdf,.docx,image/*"
        multiple
        maxSize={5 * 1024 * 1024}
        onFilesChange={setFiles}
        helperText="Max size: 5MB per file. Allowed: PDF, Word, images."
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <FileUpload
        id="file-upload-error"
        label="Upload Documents"
        accept=".pdf"
        multiple
        onFilesChange={setFiles}
        error="Only PDF files are allowed."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <FileUpload
      id="file-upload-disabled"
      label="Upload Documents"
      accept="image/*"
      onFilesChange={() => {}}
      disabled
    />
  ),
};
