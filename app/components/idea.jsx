const React = require('react');
const ReactDOM = require('react-dom');

class Idea extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {show: this.props.show}
  }

  remove() {
    this.props.removeIdea(this.props.id);
  }

  handleQuality(e) {
    let idea = this.props
    let upQuality = {'Swill': 'Okay', 'Okay': 'Super!', 'Super!': 'Super!'}
    let downQuality = {'Swill': 'Swill', 'Okay': 'Swill', 'Super!': 'Okay'}
    // this.props.handleQuality()
    if(e.target.value === 'UP') {
      return idea.quality = upQuality[idea.quality]
    }
    debugger
    return idea.quality = downQuality[idea.quality];
  }

  render() {


    return(
      <section>
        <h1>{this.props.title}</h1>
        <h2>{this.props.body}</h2>
        <span>
          <ActionButton className='inline' handleClick={this.handleQuality.bind(this)} name='DOWN' />
          <h3 className='inline'>{this.props.quality}</h3>
          <ActionButton className='inline' handleClick={this.handleQuality.bind(this)} name='UP' />
        </span><br/>
        <ActionButton handleClick={this.remove.bind(this)} name='remove'/>
      </section>
    )
  }
}

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.handleClick = props.handleClick;
  }

  render() {
    return(
      <button className='actionButton' onClick={this.handleClick}
      value={this.name}>
        {this.name}
      </button>
    )
  }

}

module.exports = Idea;
