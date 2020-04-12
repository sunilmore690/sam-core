import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";
export default class Grid extends Component {

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "200px", width: "600px" }}
      >
        <AgGridReact
          gridOptions={this.props.gridOptions}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}
