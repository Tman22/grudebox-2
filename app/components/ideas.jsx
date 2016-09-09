const React = require('react');
const ReactDOM = require('react-dom');

class inputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: '', title: ''};
    this.fieldChange = this.fieldChange.bind(this)
  }

  fieldChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  clearInput() {
    this.setState({body:'', title:''})
  }

  submitButton(e) {
    this.props.createIdea(this.state)
    this.clearInput();
  }

  render() {
    return(
      <section>
        <article>
        <input id='title' type="text"
          value={this.state.title}
          placeholder="Title"
          onChange={this.fieldChange}/><br/>
        <textarea id='body' rows="4" cols="50"
          value={this.state.body}
          placeholder="Body"
          onChange={this.fieldChange}></textarea><br/>
        </article>
        <input type="submit" onClick={this.submitButton.bind(this)}/>
      </section>
    )
  }
}

module.exports = inputField;
