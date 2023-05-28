import React from 'react';
import ReactSwipeButton from 'react-swipe-button';

export default function Defuse() {

  return (
    <>
      <ReactSwipeButton text="SWIPE TO DEFUSE" color="#48a575" onSuccess={() => location.reload()} />
    </>
  );
}

