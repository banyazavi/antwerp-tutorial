import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Icon, PageHeader } from 'antd'
import PokeInfo from '../components/pokeInfo'

class Index extends React.Component {
  constructor (props) {
    super()

    props.dispatch({ type: 'GET_POKEMON_STATUS_REQUESTED', pokeNo: props.pokeNo })
  }

  render () {
    const { dispatch, pokeNo, pokeData } = this.props

    return (
      <div>
        <Row>
          <PageHeader
            style={{
              border: '1px solid #eee'
            }}
            backIcon={null}
            title='Pokédex Status'
            subTitle='Get the pokémon status easliy with graphs!'
          />
        </Row>
        <Row style={{ marginTop: '1em' }}>
          <Col span={2}>
            <Icon
              type='caret-left'
              style={{ float: 'left', fontSize: '3em' }}
              onClick={() => dispatch({ type: 'GET_POKEMON_STATUS_REQUESTED', pokeNo: pokeNo - 1 })}
            />
          </Col>
          <Col span={20}>
            <PokeInfo pokeNo={pokeNo} pokeData={pokeData} />
          </Col>
          <Col span={2}>
            <Icon
              type='caret-right'
              style={{ float: 'right', fontSize: '3em' }}
              onClick={() => dispatch({ type: 'GET_POKEMON_STATUS_REQUESTED', pokeNo: pokeNo + 1 })}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({
  pokeReducer
}) => ({
  pokeNo: pokeReducer.get('pokeNo'),
  pokeData: pokeReducer.get('pokeData')
}))(Index)
