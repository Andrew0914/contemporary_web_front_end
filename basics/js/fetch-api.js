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
