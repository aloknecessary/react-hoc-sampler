//withLoading.js
//Author: Alok Ranjan Daftuar
//
import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}
export default WithLoading;
