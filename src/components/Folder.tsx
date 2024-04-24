import React from 'react';
import { FolderProps, FolderState } from '../types/Folder.type';
import { File } from './File';

export class Folder extends React.Component<FolderProps, FolderState> {
    constructor(props: FolderProps) {
        super(props);
        this.state = { isOpen: this.props.defaultOpen };
    }

    toggleOpen = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        const { name, children } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <div onClick={this.toggleOpen}>{name} {isOpen ? '-' : '+'}</div>
                {isOpen && (
                    <ul>
                        {children.map((child, index) => {
                            if ('children' in child) {
                                return (
                                    <Folder
                                        key={index}
                                        name={child.name}
                                        children={child.children}
                                        defaultOpen={this.props.expandedFolders.includes(child.name)}
                                        expandedFolders={this.props.expandedFolders}
                                    />
                                );
                            } else {
                                return <File key={index} name={child.name} mime={child.mime} />;
                            }
                        })}
                    </ul>
                )}
            </div>
        );
    }
}
