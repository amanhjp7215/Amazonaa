import { useParams } from 'react-router-dom';
import React from 'react';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return <h1>{slug}</h1>;
}
export default ProductScreen;
