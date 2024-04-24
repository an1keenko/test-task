import React from 'react';
import './App.css';
import { Folder } from './components/Folder.tsx';

type DataType = {
    name: string;
    children: Array<{ name: string; mime: string }>;
};

type AppState = {
    data: DataType[];
};

class App extends React.Component<NonNullable<unknown>, AppState> {
    constructor(props: NonNullable<unknown>) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('../data.json')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                hello
                {data && data.map((item: DataType, index: number) => (
                    <Folder
                        key={index}
                        name={item.name}
                        children={item.children}
                        defaultOpen={false}
                        expandedFolders={[]}
                    />
                ))}
            </div>
        );
    }
}

export default App;
