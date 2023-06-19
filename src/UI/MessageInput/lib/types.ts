import { UseFormRegister } from "react-hook-form";

export type Values_T = {
    text: string,
}

export type ImageAndTextInputs_T = ({ register, fileLoading, preuploadFile, fileId }: {
    register: UseFormRegister<Values_T>;
    fileLoading: boolean;
    preuploadFile: (e: any) => Promise<void>;
    fileId: string | undefined;
}) => JSX.Element

export type preuploadFileAPI_T = (formData: FormData) => Promise<string>