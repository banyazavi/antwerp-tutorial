import React from 'react'
import { Row, Col, Typography, Avatar, Slider } from 'antd'

class PokeInfo extends React.Component {
  render () {
    const { pokeNo, pokeData } = this.props
    const { Title } = Typography

    return (
      <div>
        <Title level={2}>
              Pokémon No.: {pokeNo}
        </Title>
        {pokeData &&
          <Row>
            <Title level={3}>
              <Avatar src={pokeData.sprites.front_default} size={75} />
              {pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}
            </Title>
            {pokeData.stats.map((e, i) =>
              <Row key={i}>
                <Col span={8}>
                  <Title level={4}>
                    {e.stat.name.charAt(0).toUpperCase() + e.stat.name.slice(1)}
                  </Title>
                </Col>
                <Col span={16}>
                  <Slider max={150} value={e.base_stat} tooltipVisible />
                </Col>
              </Row>
            )}
          </Row>}
      </div>
    )
  }
}

export default PokeInfo
