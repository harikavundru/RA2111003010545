import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const products = [
      {
        "productName": "Laptop 1",
        "price": 2236,
        "rating": 4.7,
        "discount": 63,
        "availability": "yes",
        "productId": "unique_id_1"
      },
      {
        "productName": "Laptop 13",
        "price": 1244,
        "rating": 4.5,
        "discount": 45,
        "availability": "out-of-stock",
        "productId": "unique_id_2"
      },
      {
        "productName": "Laptop 3",
        "price": 9102,
        "rating": 4.44,
        "discount": 98,
        "availability": "out-of-stock",
        "productId": "unique_id_3"
      },
      {
        "productName": "Laptop 11",
        "price": 2652,
        "rating": 4.12,
        "discount": 70,
        "availability": "yes",
        "productId": "unique_id_4"
      }
    ];
    console.log(products);
  }, []);

  return (
    <div>
      {/* No need to render anything */}
    </div>
  );
};

export default App;
