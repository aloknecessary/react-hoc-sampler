//Author: Alok Ranjan Daftuar
// App.js
//
import React from 'react';
import List from './components/List';
import WithLoading from './components/withLoading.js';
//
// import SayHelloComponent from "./components/SayHelloComponent";
// import withStyle from "./components/withStyle.js";
//
const ListWithLoading = WithLoading(List);
//const StyledHello = withStyle(SayHelloComponent);

class App extends React.Component {
  state = {
    loading: false,
    repos: null,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/aloknecessary/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
      // <div>
      //   <SayHelloComponent name="Alok" />
      //   <StyledHello name="Alok" />
      // </div>
    );
  }
}
export default App;
