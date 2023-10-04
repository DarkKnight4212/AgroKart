export const getUser = async (email) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new user",
        postData: {
          email: email,
        },
      }),
    };
    const data = await fetch(
      `https://${process.env.REACT_APP_IP}/user/getUser`,
      requestOptions
    ).then((res) => res.json());
    return data.list[0];
  } catch (err) {
    console.log(err.message);
  }
};
