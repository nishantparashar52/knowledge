const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeInput(e.target.value)
    //this.setState({temperature: e.target.value});
  }

  render() {
    const {temperature, scale} = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
    constructor() {
        this.state = {scale: 'c', temperature: ''};
    }

    convert(temperature, fn) {
        const input = ParseFloat(temperature);
        if(Number.isNaN(input)) return '';
        fn(input);
    }
    toFarenhit(temp) {
        return ((temp * 9)/5 + 32);
    }
    toCelsius(temp) {
        return Math.floor((5* temp - 32)/9);
    }
    handleCelsiusChange(temperature) {
       this.setState({scale: 'c', temperature}); 
    }

    handleFarenhitChange(temperature) {
        this.setState({scale: 'f', temperature}); 
     }
  render() {
    let celsius = scale === 'c' ? this.convert(scale, this.toCelsius) : temperature;
    let farenhit = scale === 'f' ? this.convert(scale, this.toFarenhit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" temperature={farenhit} onChangeInput={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={celsius} onChangeInput={this.handleFarenhitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);