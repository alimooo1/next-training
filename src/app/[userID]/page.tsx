import SingleUser from "../../components/Users/SingleUser/SingleUser";

export async function generateMetadata({ params } : { params: {userID: number}}) {
  const data = await fetch(`https://reqres.in/api/users/${params.userID}`);
  const result = await data.json();

  return {
    title: result.data.first_name + " " + result.data.last_name,
  };
}

export async function generateStaticParams() {
  return [
    { userID: "1" },
    { userID: "2" },
    { userID: "3" },
    { userID: "4" },
    { userID: "5" },
    { userID: "6" },
  ];
}

async function getStaticProps(ID : string) {  
  const data = await fetch(`https://reqres.in/api/users/${ID}`);
  const result = await data.json();
  return result.data;
}

async function singleUser({ params } : { params: { userID: string} }) {  
  const userData = await getStaticProps(params.userID);

  return (
    <>
      <SingleUser fetchedData={userData} />
    </>
  );
}

export default singleUser;
