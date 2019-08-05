import React, {Component} from 'react';
import './BicycleGrid.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class BicycleGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Bike Details", children: [
                        {headerName: "BikeId", field: "user_bike_id", width: 100, filter: true},
                        {headerName: "active", field: "active", width: 90},
                        {headerName: "make", field: "make", width: 150, filter: true},
                        {headerName: "model", field: "model", width: 150},
                        {headerName: "date_created", field: "date_created", width: 150},
                    ]
                },
                {
                    headerName: "Geometry",
                    children: [
                        {headerName: "geo_id", field: "geo_id"},
                        {headerName: "bb_drop", field: "bb_drop"},
                        {headerName: "reach", field: "reach"},
                        {headerName: "rake", field: "rake"},
                        {headerName: "size", field: "size"},
                        {headerName: "stack", field: "stack"},
                        {headerName: "chainstay", field: "chainstay"},
                        {headerName: "head_tube_angle", field: "head_tube_angle"},
                        {headerName: "head_tube_length", field: "head_tube_length"},
                        {headerName: "standover", field: "standover"},
                        {headerName: "top_tube_length", field: "top_tube_length"},
                        {headerName: "wheelbase", field: "wheelbase"},
                        {headerName: "year", field: "year"},
                        {headerName: "seat_tube_angle", field: "seat_tube_angle"},
                        {headerName: "seat_tube_length", field: "seat_tube_length"},
                    ]
                },
                {
                    headerName: "Position",
                    children: [
                        {headerName: "name", field: "name"},
                        {headerName: "seat", field: "seat"},
                        {headerName: "setback", field: "setback"},
                        {headerName: "Seat Height", field: "seat_height"},
                        {headerName: "position_id", field: "position_id"},
                        {headerName: "description", field: "description"},
                        {headerName: "handlebar", field: "handlebar"},
                        {headerName: "handlebar_drop", field: "handlebar_drop"},
                        {headerName: "handlebar_reach", field: "handlebar_reach"},
                        {headerName: "crank", field: "crank"},
                    ]
                },
            ],
        }
    }

    render() {
        return (
            <section className='grid-section'>
                <div
                    className="ag-theme-balham grid-view">
                    <AgGridReact
                        // listening for events
                        onGridReady={this.onGridReady}

                        // binding to array properties
                        rowData={this.props.rowData}
                        columnDefs={this.state.columnDefs}

                        // setting default column properties
                        defaultColDef={{
                            sortable: true,
                            filter: true,
                            headerComponentParams: {
                                menuIcon: 'fa-bars'
                            }
                        }}>


                        {/*rowData={this.state.rowData}>*/}
                    </AgGridReact>
                </div>
            </section>
        );
    }
}

export default BicycleGrid;