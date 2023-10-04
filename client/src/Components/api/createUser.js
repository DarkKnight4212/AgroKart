export const createUser = async (postData) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new user",
        postData,
      }),
    };
    const data = await fetch(
      `https://${process.env.REACT_APP_IP}/user/create`,
      requestOptions
    ).then((res) => res.json());
    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};
