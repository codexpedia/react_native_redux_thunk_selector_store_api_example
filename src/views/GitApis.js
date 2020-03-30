import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAvailableApiError, getAvailableApiLoading, getAvailableApiSuccess } from '../selectors/availableApiSelector';
import fetchAvailableApi from '../services/fetchAvailableApi';

const mapStateToProps = state => {
  return {
    loading: getAvailableApiLoading(state),
    api: getAvailableApiSuccess(state),
    error: getAvailableApiError(state),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAvailableApi: fetchAvailableApi
}, dispatch)

class GitApis extends Component {
  componentDidMount() {
    this.props.fetchAvailableApi();
  }
  render() {
    const { api } = this.props;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(api)}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(GitApis);
