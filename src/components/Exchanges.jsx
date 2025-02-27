import React from 'react';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import millify from 'millify';
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  const exchangesList = data?.data?.exchanges;

  return (
    <Row>
      <Col span={6}>Exchange</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Change</Col>
      {exchangesList?.map((exchange) => (
        <Col span={24} key={exchange.id}>
          <Collapse>
            <Panel
              key={exchange.id}
              showArrow={false}
              header={(
                <Row>
                  <Col span={6}>
                    <Avatar className="exchange-image" src={exchange.iconUrl} />
                    <Text>{exchange.name}</Text>
                  </Col>
                  <Col span={6}>${millify(exchange.volume)}</Col>
                  <Col span={6}>{exchange.numberOfMarkets}</Col>
                  <Col span={6}>{millify(exchange.marketShare)}%</Col>
                </Row>
              )}
            />
          </Collapse>
        </Col>
      ))}
    </Row>
  );
};

export default Exchanges;
