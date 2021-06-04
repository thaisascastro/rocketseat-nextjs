export default function Home() {
  return <h1>Hello world!</h1>;
}

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/orgs/rocketseat");
  const data = await response.json();
  return {
    props: {},
  };
};
