import React from 'react';

const BlankPage = ({ props }) => {
  return (
    <div>
      <div style={{ marginTop: '100px' }}></div>
      <center>
        <h1>{props.blankTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.blankMessage }}></div>
      </center>
    </div>
  );
};

export default BlankPage;
