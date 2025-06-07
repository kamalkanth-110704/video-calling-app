import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [link, setLink] = useState('');

  const generateRoomId = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10);
    setRoomId(newRoomId);
    const generatedLink = `${window.location.origin}/room/${newRoomId}`;
    setLink(generatedLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Room link copied to clipboard!");
  };

  const handleJoin = () => {
    if (!roomId.trim()) {
      alert("Please generate a Room ID first.");
      return;
    }
    navigate(`/room/${roomId}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎥 Kamal's Video Call App</h1>
      <button onClick={generateRoomId} style={styles.generateButton}>Generate Room ID</button>

      {link && (
        <div style={styles.card}>
          <p style={styles.subheading}>🔗 Share this link with your friend:</p>
          <input type="text" readOnly value={link} style={styles.input} />
          <div style={styles.buttonGroup}>
            <button onClick={copyToClipboard} style={styles.actionButton}>📋 Copy Link</button>
            <button onClick={handleJoin} style={styles.actionButton}>🚪 Join Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  generateButton: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#1f4037',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#ffffff15',
    borderRadius: '12px',
    padding: '1.5rem',
    textAlign: 'center',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  subheading: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    width: '300px',
    borderRadius: '8px',
    border: 'none',
    textAlign: 'center',
    marginBottom: '15px',
    fontSize: '14px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  actionButton: {
    padding: '10px 20px',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    color: '#1f4037',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  }
};

export default Home;
