const loginUser = async (user: any): Promise<any> => {
  const endpoint = 'https://johnny-carstore.herokuapp.com/login';
  console.log('user', user, JSON.stringify({ ...user }));
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return data.err.message; }

  console.log('data', data);
  return data;
};

export { loginUser };
