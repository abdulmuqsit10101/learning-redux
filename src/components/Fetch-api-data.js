import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startFetching} from '../redux/actions.js';
import {Button, Typography, Table} from 'antd';

const {Title} = Typography;

class FetchApiData extends Component {

  state = {
    dataSource: [],
    columns: [
      {
        title: 'No.',
        dataIndex: 'key',
        key: 'key'
      },
      {
        title: 'UserId',
        dataIndex: 'userId',
        key: 'userId'
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: 'Body',
        dataIndex: 'body',
        key: 'body'
      }
    ]
  };

  componentWillReceiveProps(props) {
    const {posts} = props.posts;
    const newPosts = [];
    [...posts].map((post) => {
      const newPostsItem = { ...post, key: post.id};
      delete newPostsItem.id;
      return newPosts.push(newPostsItem);
    });

    this.setState({dataSource: newPosts})
  }

  handleFetch = () => {
    this.props.startFetching();
  };

  render() {
    const {dataSource, columns} = this.state;
    const {loading, error} = this.props.posts;
    const {handleFetch} = this;
    return (
      <div style={{padding: 50}}>
        <Title level={3} text-align="center">Api Calling</Title>
        <Button type="primary" className={'mb-2'} onClick={handleFetch}>
          {!loading ? 'Fetch' : 'Loading...'}
        </Button>
        <br/><br/>
        {
          !error ?
            <>
              <h2>Data : </h2>
              <Table dataSource={dataSource} columns={columns}/>
            </>
            :
            <p>Sorry Error found</p>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFetching: () => dispatch(startFetching())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchApiData);
