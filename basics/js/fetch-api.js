// Simple use of fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// using fetch with async/await
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const { title } = await response.json();

  console.log(`✍ Post title: ${title}`);
} catch (error) {
  console.error(error);
}

// Advance use of fetch api

async function savePost({ title, body, userId }) {
  const savePostRequest = new Request(
    "https://jsonplaceholder.typicode.com/postxs",
    {
      method: "POST",
      body: JSON.stringify({ title, body, userId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  try {
    const response = await fetch(savePostRequest);

    const data = await response.json();

    if (!response.ok) {
      console.log("❌ Post could not save");
    } else {
      const data = await response.json();

      console.log("✔ Post saved", data);
    }
  } catch (error) {
    console.error(error);
  }
}
