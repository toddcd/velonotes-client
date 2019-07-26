import React, { Component } from 'react';
//import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class CollectionGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make"
            }, {
                headerName: "Model", field: "model"
            },
                {
                headerName: "Size", field: "size"
            },
                {
                    headerName: "Category", field: "category"
                },
                {
                    headerName: "Seat Tube", field: "seatTubeLength"
                },
                {
                    headerName: "Seat Angle", field: "seatTubeAngle"
                },
                {
                    headerName: "Toptube Length", field: "topTubeLength"
                },
                {
                    headerName: "Headtube Length", field: "headTubeLength"
                },
                {
                    headerName: "Headtube Angle", field: "headTubeAngle"
                },
                {
                    headerName: "Chainstay Length", field: "chainStayLength"
                },
                {
                    headerName: "BB Drop", field: "bottomBracketDrop"
                },
                {
                    headerName: "Stack", field: "stack"
                },
                {
                    headerName: "Reach", field: "Reach"
                },
                {
                    headerName: "Trail", field: "trail"
                },
                {
                    headerName: "Fork Rake", field: "forkRake"
                },
                {
                    headerName: "Standover", field: "standOverHeight"
                },
            ],
            rowData: [{
                make: "Specialized", model: "Crux", price: 35000
            }, {
                make: "Giant", model: "TRX Advanced", price: 32000
            }, {
                make: "Felt", model: "TX30", price: 72000
            }],
        }
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                    width: '900px',
                    padding: '30px'}}
            >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export default CollectionGrid;