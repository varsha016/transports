const createState = async () => {
  const response = await fetch('/api/state', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: '1',
      cid: '1',
      name: 'MAHARASHTRA',
    }),
  });

  const data = await response.json();
  console.log(data);
};
