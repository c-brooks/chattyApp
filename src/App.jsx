import React       from 'react';
import ReactDOM    from 'react-dom';
import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';



const data = {
  currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: 'Bob',
      content: 'Has anyone seen my marbles?',
    },
    {
      username: 'Anonymous',
      content: 'No, I think you lost them. \
      You lost your marbles Bob. You lost them for good.'
    }
  ]
};


const App = React.createClass({

  getInitialState:  function() {
    return {data: data};
  },

  componentDidMount: function() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      this.state.data.messages.push({id: 3, username: 'Michelle', content: 'Hello there!'});
      // Update the state of the app component. This will call render()
      this.setState({data: this.state.data})
    }, 3000);
  },

  render: function() {
    console.log('Rendering <App />');
    return (
      <div>
        <MessageList messages={this.state.data.messages}/>
        <ChatBar currentUser={this.state.data.currentUser}
                 onTextSubmit={this.handleNewMessage}/>
      </div>
    );
  },

  handleNewMessage: function(newMessage) {

    this.state.data.messages.push({
      id: this.state.data.messages.length,
      username: newMessage.username,
      content:  newMessage.msg
    });
    console.log('Messages:', this.state.data.messages);
    this.setState({data: this.state.data})
  }
});

export default App;
