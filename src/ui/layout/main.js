import React, { Component } from 'react';
import './layout.css';
import { Col, Grid, Row } from 'react-bootstrap';

class Layout extends Component {
  render() {
    const items = [];
    for (var i = 0; i < 10; i++) {
      items.push(<div key={i} className="item">{i+1}</div>)
    }
    return (
      <div>
        <header>Header goes Here</header>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={3}>
              {items}
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className='round'>Div 5px rounded corners</div>
            </Col>
            <Col xs={12} sm={6} md={3} className='center'>
              <p>Vertical/Horizontal text</p>
            </Col>
            <Col xs={12} sm={6} md={3} className='img'>
              Full Width IMG
            </Col>
          </Row>
          <button onClick={() => this.props.back()}>Back to Menu</button>
        </Grid>
        <footer>Footer goes Here</footer>
      </div>
    );
  }
}

export default Layout;
