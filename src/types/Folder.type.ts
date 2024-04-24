export type FolderProps = {
    name: string;
    children: Array<FileProps | FolderProps>;
    defaultOpen: boolean;
    expandedFolders: string[];
};

export type FolderState = {
    isOpen: boolean;
};
