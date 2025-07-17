'use client'
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    CircleCheckIcon,
    CircleArrowDown,
    HammerIcon,
    RocketIcon,
    SaveIcon,
} from "lucide-react";

function FileUploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop });

    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            {/* LOADING UI */}


            <div
                {...getRootProps()}
                className={`p-10 border-2 border-dashed mt-10 w-[90%] border-yellow-500 text-yellow-500 rounded-lg h-96 items-center justify-center flex 
                    ${isFocused || isDragAccept ? "bg-yellow-400" : "bg-yellow-200 "

                    }`}
            >
                <input {...getInputProps()} />
                <div className='flex flex-col items-center justify-center'>
                    {
                        isDragActive
                            ? <>
                                <RocketIcon className='h-20 w-20 animate-ping' />
                                <p>Drop the files here ...</p>
                            </>
                            : <>
                                <CircleArrowDown className='' />

                                <p>Drag and drop some files here, or click to select files</p>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}

export default FileUploader;
