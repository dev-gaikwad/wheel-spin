import { useState } from 'react';

function Wheel() {
  const [selectedItem, setSelectedItem] = useState(null);
  const prizes = [
    'Buy 1 Get 1 Free',
    '30% sitewide off',
    'Hot Chocolate FREE with Tea',
    'Offer 4',
    'Offer 5',
    'Offer 6',
  ];
  const spinHandler = () => {
    if (selectedItem === null) {
      const select = Math.floor(Math.random() * prizes.length);
      console.log(select);
      setSelectedItem(select);
    } else {
      setSelectedItem(null);
      // setTimeout()
    }
  };
  return (
    <>
      <div className='wheel-container'>
        ---Wheel---
        <div className='wheel'>
          {prizes.map((prize, index) => (
            <div className='wheel-item' key={index}>
              {prize}
            </div>
          ))}
        </div>
      </div>
      <button onClick={spinHandler}>Spin</button>
    </>
  );
}

export default Wheel;
