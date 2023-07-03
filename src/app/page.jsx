import Users from "@/components/Users/Users";

async function getStaticProps() {
  const data = await fetch("https://reqres.in/api/users");
  const result = await data.json();
  return result.data
}

async function Home() {
  const usersData = await getStaticProps()
  console.log(usersData);
  return (
    <>
      <Users fetchedData={usersData} />
    </>
  );
}

export default Home;