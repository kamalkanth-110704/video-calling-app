const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// ✅ Use ZEGOCLOUD's official kit token generator for Node.js
const { ZegoUIKitPrebuilt } = require('@zegocloud/zego-uikit-prebuilt-nodejs');

app.get('/get-kit-token', (req, res) => {
  const { roomId, userId, userName } = req.query;

  const appId = parseInt(process.env.ZEGO_APP_ID);
  const serverSecret = process.env.ZEGO_SERVER_SECRET;

  try {
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      userId,
      userName || 'Guest'
    );
    res.send({ token: kitToken });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Kit Token generation failed' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Secure token server running at http://localhost:${PORT}`);
});
