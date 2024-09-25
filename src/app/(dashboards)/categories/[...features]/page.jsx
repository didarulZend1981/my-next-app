import React from 'react';

const FeaturePage = ({params}) => {
  if(params.features.length==3)
    return <>{params.features[2]}</>
  if(params.features.length==2)
    return <>{params.features[1]}</>
  return (
    <div>
      <h2>category details</h2>
    </div>
  );
};

export default FeaturePage;