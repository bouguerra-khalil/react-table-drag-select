import React from "react";
import ReactDOM from "react-dom";
import equal from "deep-is";
import TableDragSelect from "./index.js";
import "./style.css"; // TableDragSelect stylesheet
import "./demo.css"; // Demo stylesheet

class App extends React.Component {
  state = {
    cells: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ]
  };

  render = () =>
    <div>
      <h1>
        <a href="https://github.com/mcjohnalds/react-table-drag-select">
          <code>react-table-drag-select</code>
        </a>{" "}
        demo
      </h1>
      <h2>Timetable</h2>
      <div className="table-container">
        <TableDragSelect
          value={this.state.cells}
          maxRows={3}
          maxColumns={3}
          onChange={this.handleChange}
          onSelectionStart={event => console.log("start", event)}
          onInput={event => console.log("event", event)}
        >
          <tr>
            <td disabled />
            <td disabled>Monday</td>
            <td disabled>Tuesday</td>
            <td disabled>Wednesday</td>
            <td disabled>Thursday</td>
            <td disabled>Friday</td>
            <td disabled>Saturday</td>
          </tr>
          <tr>
            <td disabled>10:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
          <tr>
            <td disabled>11:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
          <tr>
            <td disabled>12:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
          <tr>
            <td disabled>13:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
          <tr>
            <td disabled>14:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
          <tr>
            <td disabled>15:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
          <tr>
            <td disabled>16:00</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>overtime</td>
          </tr>
        </TableDragSelect>
      </div>
      <button onClick={this.handleReset}>Reset</button>
      <h2>
        <code>{"onChange={cells => ...}"}</code> callback
      </h2>
      <pre ref="output">
        cells = {stringifyBoolMatrix(this.state.cells)}
      </pre>
      <h2>Javascript</h2>
      <h2>Optional styling</h2>
      <p>
        This isn't required, but changing the colors can really spruce things
        up.
      </p>
      <h2>Resulting DOM</h2>
    </div>;

  handleChange = cells => {
    if (!equal(this.state.cells, cells)) {
      this.restartFlashAnimation();
      this.setState({ cells });
    }
  };

  handleReset = () => {
    const cells = [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ];
    if (!equal(this.state.cells, cells)) {
      this.restartFlashAnimation();
      this.setState({ cells });
    }
  };

  restartFlashAnimation = () => {
    this.refs.output.classList.remove("flash");
    setTimeout(() => this.refs.output.classList.add("flash"), 50);
  };
}

// Takes a 2D array of booleans and returns a pretty-printed string
const stringifyBoolMatrix = matrix => {
  const row2Str = row => {
    return row.map(cell => (cell ? " true" : "false")).join(", ");
  };

  return "[\n  [" + matrix.map(row2Str).join("],\n  [") + "]\n]";
};

const div = document.createElement("div");
document.body.appendChild(div);
ReactDOM.render(<App />, div);
