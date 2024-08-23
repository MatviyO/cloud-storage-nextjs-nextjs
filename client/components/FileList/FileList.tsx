'use client';

import React from "react";
import styles from "./FileList.module.scss";
import { FileCard } from "@/components/FileCard";
import Selecto from "react-selecto";
import {FileItem} from "@/api/dto/IFilesDTO";

export type FileSelectType = "select" | "unselect";

interface FileListProps {
    items: FileItem[];
    onFileSelect: (id: string, type: FileSelectType) => void;
}

export const FileList: React.FC<FileListProps> = ({ items, onFileSelect }) => {
    return (
        <div className={styles.root}>
            {items.map((item) => (
                <div data-id={item.id} key={item.id} className="file">
                    <FileCard fileName={item.fileName} originalName={item.originalName} />
                </div>
            ))}

            <Selecto
                selectableTargets={[".file"]}
                selectByClick
                hitRate={10}
                selectFromInside
                toggleContinueSelect={["shift"]}
                continueSelect={false}
                onSelect={(e) => {
                    e.added.forEach((el) => {
                        el.classList.add("active");
                        onFileSelect(String(el.dataset["id"]), "select");
                    });
                    e.removed.forEach((el) => {
                        el.classList.remove("active");
                        onFileSelect(String(el.dataset["id"]), "unselect");
                    });
                }}
            />
        </div>
    );
};