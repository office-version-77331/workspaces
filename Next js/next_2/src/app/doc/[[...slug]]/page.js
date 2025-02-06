'use client';

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const DocInfo = () => {
  const params = useParams();
  const searchParams = useSearchParams(); // Gets query parameters

  // Convert searchParams to an object
  const queryObject = Object.fromEntries(searchParams.entries());

  return (
    <div>
      <h1>Doc Page For Website</h1>
      <p>Doc details: {params.slug}</p>

      <h2>Query Parameters:</h2>
      <ul>
        {Object.entries(queryObject).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocInfo;
