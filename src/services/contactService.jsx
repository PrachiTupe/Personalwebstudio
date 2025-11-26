export const sendContactToSheet = async (payload) => {
  try {
    const scriptURL = "https://script.google.com/macros/s/AKfycbz6GUlm-PEhNb2vlN2VsqD5CdKSrmRgCWYInDeAO3ckFdibQGW5ZDk97-qw0BQrNMr21w/exec"; // paste here

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
