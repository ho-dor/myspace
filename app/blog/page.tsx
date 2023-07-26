interface Post {
  slug: string;
  title: string;
  content: string;
}

export default async function BlogList() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>SLUG: {post.slug}</p>
            <br />
          </>
        );
      })}
    </>
  );
}
