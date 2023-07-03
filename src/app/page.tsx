import Users from "../components/Users/Users";
import UserInterface from "../interfaces/User"

async function getStaticProps() {
  const data  = await fetch("https://reqres.in/api/users");
  const result = await data.json();
  return result.data as UserInterface[]
}

async function Home() {
  const usersData = await getStaticProps()  
  return (
    <>
      <Users fetchedData={usersData} />
    </>
  );
}

export default Home;