"use client"
import React from "react";
import { FileActions } from "@/components/FileActions";
import { Empty } from "antd";

import {FileSelectType, FileList} from "@/components/FileList/FileList";
import {FileItem} from "@/api/dto/IFilesDTO";
import {remove} from "@/api/file";

interface FilesProps {
    items: FileItem[];
    withActions?: boolean;
}

export const Files: React.FC<FilesProps> = ({ items, withActions }) => {
    const [files, setFiles] = React.useState<FileItem[]>(items || []);
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    const onFileSelect = (id: string, type: FileSelectType) => {
        if (type === "select") {
            setSelectedIds((prev) => [...prev, id]);
        } else {
            setSelectedIds((prev) => prev.filter((_id) => _id !== id));
        }
    };

    const onClickRemove = () => {
        setSelectedIds([]);
        setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
        remove({ids: selectedIds});
    };

    const onClickShare = () => {
        alert("share");
    };

    return (
        <div>
            {files.length ? (
                <>
                    {withActions && (
                        <FileActions
                            onClickRemove={onClickRemove}
                            onClickShare={onClickShare}
                            isActive={selectedIds.length > 0}
                        />
                    )}
                    <FileList items={files} onFileSelect={onFileSelect} />
                </>
            ) : (
                <Empty className="empty-block" description="Список файлов пуст" />
            )}
        </div>
    );
};