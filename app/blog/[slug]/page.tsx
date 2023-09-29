interface Props {
  params: {
    slug: string;
  };
}

interface Post {
  slug: string;
  title: string;
  content: string;
}

export const revalidate = 420;

const fetchPosts = async () => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts;
};

async function getStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default async function Blog({ params }: Props) {
  const posts = await fetchPosts();
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <h1>No post found</h1>
      )}
    </>
  );
}
