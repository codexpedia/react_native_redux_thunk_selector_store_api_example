import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAccountError, getAccountLoading, getAccountSuccess } from '../selectors/accountSelector';
import fetchAccount from '../services/fetchAccount';

// Map the state of the redux store to the component props.
const mapStateToProps = state => {
  console.log(`${Date()} mapStateToProps state: `, state);
  return {
    loading: getAccountLoading(state),
    account: getAccountSuccess(state),
    error: getAccountError(state),
  };
};

// Map the dispatched actions to the component props.
// This makes the function call 'this.props.accountInfo('google')' in componentDidMount possible.
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccount: fetchAccount
}, dispatch)

class GitAccount extends Component {
  componentDidMount() {
    console.log(`${Date()} >>> componentDidMount props: `, this.props);
    console.log(`${Date()} >>> componentDidMount state: `, this.state);
    console.log(`${Date()} >>> componentDidMount initiates the api call fetchAccount.`);
    this.props.fetchAccount('google');
  }
  render() {
    console.log(`${Date()} >>> render props: `, this.props);
    console.log(`${Date()} >>> render state: `, this.state);
    const { account } = this.props;
    console.log(`${Date()} >>> render account: `, account);
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(account)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  }
});

// currying function https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400
export default connect(mapStateToProps, mapDispatchToProps)(GitAccount);
