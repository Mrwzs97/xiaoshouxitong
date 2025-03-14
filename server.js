const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// 飞书应用的 appId 和 appSecret
const appId = 'cli_a75824bf6bb5d01c';
const appSecret = 'LdbJPx4xruXENCRS1k0y8dJsP58GX2so';

// 获取租户访问令牌
app.get('/getAccessToken', async (req, res) => {
    try {
        const response = await axios.post('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
            app_id: appId,
            app_secret: appSecret
        });
        const { code, tenant_access_token, msg } = response.data;
        if (code === 0) {
            res.json({ success: true, accessToken: tenant_access_token });
        } else {
            res.json({ success: false, message: msg });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: '获取访问令牌失败' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});