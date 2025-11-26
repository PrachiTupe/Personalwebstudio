export const sendContactToSheet = async (payload) => {
  try {
  const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return { status: "success" };
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error);
    return { status: "error" };
  }
};
