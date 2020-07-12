import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { withRouter } from 'next/router'
import configureStore from '../store'
import { Provider } from 'react-redux'
import { Layout, Typography } from 'antd'
import 'antd/dist/antd.css'

class RootApp extends App {
  render () {
    const { Header, Content } = Layout
    const { Title } = Typography

    const { Component, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ minWidth: '680px' }}>
          <Header style={{ paddingTop: '9px' }}>
            <Title level={1} style={{ color: '#fff' }}>Antwerp Tutorial</Title>
          </Header>
          <Content style={{ padding: '2em 1em' }}>
            <Component />
          </Content>
        </div>
      </Provider>
    )
  }
}

export default withRedux(configureStore, () => ({

}))(withReduxSaga(withRouter(RootApp)))
