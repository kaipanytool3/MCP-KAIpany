const { execFile } = require('child_process');
const path = require('path');

module.exports = (req, res) => {
  // Thiết lập headers cho SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const mcpPath = path.join(process.cwd(), 'dist/cli.js');
  const child = execFile(
    'node',
    [
      mcpPath,
      'mcp',
      '-a',
      process.env.APP_ID,
      '-s',
      process.env.APP_SECRET,
      '-m',
      'sse',
      '--host',
      '0.0.0.0'
    ],
    {
      env: {
        ...process.env,
        NODE_ENV: 'production'
      }
    },
    (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error);
        res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
        res.end();
        return;
      }
    }
  );

  // Xử lý output từ MCP server
  child.stdout.on('data', (data) => {
    res.write(`data: ${data}\n\n`);
  });

  child.stderr.on('data', (data) => {
    res.write(`data: ${data}\n\n`);
  });

  // Xử lý khi client ngắt kết nối
  req.on('close', () => {
    child.kill();
  });
};