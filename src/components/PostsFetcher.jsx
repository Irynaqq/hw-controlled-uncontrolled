import { useEffect, useState } from "react";

function PostsFetcher() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
          throw new Error("Помилка завантаження даних");
        }

        const data = await response.json();

        if (isMounted) {
          setPosts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Сталася помилка");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <h2>PostsFetcher (асинхронний запит)</h2>
      <p>Дані завантажуються з JSONPlaceholder API.</p>

      {isLoading && <p>Завантаження даних...</p>}
      {error && <p style={{ color: "red" }}>Помилка: {error}</p>}

      {!isLoading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <br />
              <small>{post.body}</small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default PostsFetcher;
