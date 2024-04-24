import React from "react";
import { FileProps } from "../types/File.type";

export class File extends React.Component<FileProps> {
    render() {
        return <li>{this.props.name} ({this.props.mime})</li>;
    }
}
