import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="140" r="120" />
    <rect x="0" y="273" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="305" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="422" rx="10" ry="10" width="90" height="30" />
    <rect x="110" y="415" rx="10" ry="10" width="170" height="45" />
  </ContentLoader>
);

export default Skeleton;
