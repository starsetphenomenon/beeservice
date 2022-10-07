import React from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy({children, ...props}) {
  
  return (
    <h1 {...props}>{children}</h1>

  )
}