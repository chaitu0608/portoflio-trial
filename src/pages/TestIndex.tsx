import React from 'react';

const TestIndex = () => {
  console.log('TestIndex component is rendering');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0b0f12', 
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#20E3B2',
          marginBottom: '1rem'
        }}>
          Portfolio Test
        </h1>
        <p style={{ color: '#a0aec0' }}>
          If you can see this, the basic setup is working!
        </p>
        <p style={{ color: '#a0aec0', fontSize: '0.8rem', marginTop: '1rem' }}>
          Check the browser console for any errors.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button 
            onClick={() => alert('Button works!')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#20E3B2',
              color: '#0b0f12',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestIndex;
