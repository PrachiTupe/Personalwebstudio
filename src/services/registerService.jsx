export const sendRegistrationToSheet = async (payload) => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbz9vHqxnWRfbzBqiQLvO5_YInU3Z36WT5erskt0gskjg7FwYy7RiLik_owYPOICunnV/exec";

  try {
    await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return { status: "success" };
  } catch (error) {
    console.error("Error saving registration:", error);
    return { status: "error" };
  }
};
