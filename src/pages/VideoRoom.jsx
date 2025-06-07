import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

function VideoRoom() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const userId = Date.now().toString();
    const userName = "kamal kanth";

    const appId = 184446587; // replace with your actual ZEGO App ID
    const serverSecret = "bb79fa5b2b84ce717e1e16616acf3174"; // replace with your actual server secret

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
        mode: ZegoUIKitPrebuilt.OneONoneCall, // Or GroupCall
      },
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
}

export default VideoRoom;
