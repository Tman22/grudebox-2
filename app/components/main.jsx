const React = require('react');
const ReactDOM = require('react-dom');
const InputField = require('./ideas');
const Idea = require('./idea');
var ideas = [];

class Main extends React.Component {
  constructor() {
    super()
    this.state = {ideas: ideas};
  }
  createIdea({body, title}) {
    ideas.unshift({body, title, id: Date.now(), quality: 'Swell'})
    this.setState({ideas: ideas });
  }

  removeIdea(id) {
    ideas = ideas.filter(idea => idea.id !== id)
    this.setState({ideas: ideas });
  }

  handleQuality() {

  }

  render() {
    const displayIdeas = ideas.map(idea => {
      return <Idea {...idea} key={idea.id}
              removeIdea={this.removeIdea}
              upQuality={this.upQuality}
              downQuality={this.downQuality}
              />
    });

    return(
      <section className='main'>
        <h1>Ideas</h1>
        <InputField createIdea={this.createIdea.bind(this)} />
        {displayIdeas}
      </section>
    )
  }
}


ReactDOM.render(<Main/>, document.getElementById('application'))
