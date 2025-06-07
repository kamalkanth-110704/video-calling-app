import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

function VideoRoom() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const userId = Date.now().toString();
    const userName = "kamal kanth";

    const appId = 184446587;
    const serverSecret = "bb79fa5b2b84ce717e1e16616acf3174";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      userId,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: window.location.href,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#111',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div ref={myMeeting} />
    </div>
  );
}

export default VideoRoom;
