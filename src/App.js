import { Component } from "react"
import s from "./App.module.css"
import { Button } from "./components/Button"
import { Output } from "./components/Output"
import * as math from "mathjs"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: "",
      complete: true,
    }
  }
  handleClear = () => {
    this.setState({ input: "" })
  }

  handleDelete = () => {
    this.setState({ input: this.state.input.slice(0, -1) })
  }

  appendToInput = (value) => {
    // console.log(this.state.input)
    if (this.state.complete && !isNaN(value)) {
      this.setState({ input: value, complete: false })
    } else if (value !== "." || !this.state.input.toString(10).includes(".")) {
      this.setState({ input: this.state.input + value, complete: false })
    }
    console.log(this.state.complete)
    console.log(this.state.input)
  }

  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input),
      complete: true,
    })
  }

  render() {
    return (
      <div className={s.app}>
        <Output input={this.state.input} />
        <div className={s.calcGrid}>
          <Button handleClick={() => this.handleClear()} span="2">
            AC
          </Button>
          <Button handleClick={() => this.handleDelete()}>DEL</Button>
          <Button handleClick={this.appendToInput}>/</Button>
          <Button handleClick={this.appendToInput}>7</Button>
          <Button handleClick={this.appendToInput}>8</Button>
          <Button handleClick={this.appendToInput}>9</Button>
          <Button handleClick={this.appendToInput}>*</Button>
          <Button handleClick={this.appendToInput}>4</Button>
          <Button handleClick={this.appendToInput}>5</Button>
          <Button handleClick={this.appendToInput}>6</Button>
          <Button handleClick={this.appendToInput} className={s.num}>
            -
          </Button>
          <Button handleClick={this.appendToInput}>1</Button>
          <Button handleClick={this.appendToInput}>2</Button>
          <Button handleClick={this.appendToInput}>3</Button>
          <Button handleClick={this.appendToInput} className={s.op}>
            +
          </Button>
          <Button handleClick={this.appendToInput}>.</Button>
          <Button handleClick={this.appendToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()} span="2">
            =
          </Button>
        </div>
      </div>
    )
  }
}

export default App
