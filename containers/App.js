import React, { Component } from 'react';
import { connect } from 'react-redux';

import Change from '../components/Change';
import Hello from '../components/Hello';

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { actions, text} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return { text: state.text }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)