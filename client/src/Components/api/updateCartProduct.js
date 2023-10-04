export const updateUserCartItem = async (postData) => {
  try {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "update",
        postData,
      }),
    };
    const data = await fetch(
      `https://${process.env.REACT_APP_IP}/cart/update-user-cart-item`,
      requestOptions
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
