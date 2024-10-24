// pages/index.js
import React from 'react';

export default function Home({ items }) {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulating fetching data from an API
  const items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
  ];

  return {
    props: {
      items,
    },
  };
}

