exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: process.env.MAPBOX_TOKEN })
  };
};
