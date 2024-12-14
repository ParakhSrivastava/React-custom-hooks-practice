import useFetch from "../hooks/use-fetch";
const PostLists = () => {
  const { data, error, loading } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Post list</h1>
      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostLists;
