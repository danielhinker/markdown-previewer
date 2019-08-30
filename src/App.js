import React from 'react';
import marked from 'marked';
import './App.css';

const renderer = new marked.Renderer();
// const marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true,

});
const start =
  `
  # Header
  ## Sub Header
  [link](https://google.com)
  \` Inline Code \`
  \`\`\`
  Code Block
  \`\`\`
  ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
  **bold**
  1. OL
  * UL
  > Block Quote
  `


const Preview = (props) => {
  return (
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markup, { renderer: renderer })}}/>
  );
}

const Editor = (props) => {
  return (
    <textarea id="editor" value={props.markup} onChange={props.onChange} type="text" />
  );
}


class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      markup: start
    };
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange = (e) => {
    this.setState({
      
        markup: e.target.value
      
    });
  }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <Editor onChange={this.handleChange} markup={this.state.markup} />
            
            <Preview markup={this.state.markup} />
            
          </header>
        </div>
      );
  }
}
export default App;
