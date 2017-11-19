import React from 'react';

class CustomTooltip extends React.Component {
  render() {
    const style = {
      background: '#fff',
      padding: 5,
      color: '#000'
    };
    const { active, payload } = this.props;
    if (!payload) return null;
    
    if (active) {
      const { payload } = this.props;
      const date = payload[0].payload.date[0];
      return (
        <div style={style}>
          <small>
            {`Date: ${date && date}`}
          </small>
          <p style={{ fontSize: 14 }}>{'Value (USD): '}
            <b>{`$${payload[0].value}`}</b>
          </p>
        </div>
      );
    }

    return null;
  }
}

export default CustomTooltip;
