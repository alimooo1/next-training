import Users from "@/components/Users/Users";

function Home({ usersData }) {
  return (
    <>
      <Users fetchedData={usersData} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const data = await fetch("https://reqres.in/api/users");
  const result = await data.json();

  return {
    props: {
      usersData: result.data,
    },
  };
}
