import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [link, setLink] = useState('');

  // Generate Room ID and set full link
  const generateRoomId = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10);
    setRoomId(newRoomId);
    const generatedLink = `${window.location.origin}/room/${newRoomId}`;
    setLink(generatedLink);
  };

  // Copy the room link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Room link copied to clipboard!");
  };

  // Join the room
  const handleJoin = () => {
    if (!roomId.trim()) {
      alert("Please generate a Room ID first.");
      return;
    }
    navigate(`/room/${roomId}`);
  };

  return (
    <div id="home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '50px' }}>
      <h2>Start a Video Call</h2>

      <button onClick={generateRoomId} style={{ padding: '10px 20px' }}>
        Generate Room ID
      </button>

      {link && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p><strong>Share this link with your friend:</strong></p>
          <input
            type="text"
            readOnly
            value={link}
            style={{ padding: '8px', width: '300px', textAlign: 'center' }}
          />
          <div style={{ marginTop: '10px' }}>
            <button onClick={copyToClipboard} style={{ padding: '8px 16px', marginRight: '10px' }}>
              Copy Link
            </button>
            <button onClick={handleJoin} style={{ padding: '8px 16px' }}>
              Join Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
