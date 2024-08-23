import {Api} from "@/core/services/axios.service";
import {FileItem} from "@/api/dto/IFilesDTO";

type FileType = "all" | "photos" | "trash";

export const getAll = async ({type = "all", token}: {type?: FileType, token?: string}): Promise<FileItem[]> => {
    return (await Api(token).get("/files?type=" + type)).data;
};

export const remove = ({ids, token}: {ids: string[], token?: string}): Promise<void> => {
    return Api(token).delete("/files?ids=" + ids);
};

export const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    formData.append("file", file);

    const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onProgress: (event: ProgressEvent) => {
            onProgress({ percent: (event.loaded / event.total) * 100 });
        },
    };

    try {
        const { data } = await Api().post("files", formData, config);

        onSuccess();

        return data;
    } catch (err) {
        onError({ err });
    }
};