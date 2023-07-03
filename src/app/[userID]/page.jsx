import SingleUser from "../../components/Users/SingleUser/SingleUser";

export async function generateMetadata({ params }) {
  const id = params.userID;
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

async function getStaticProps(params) {
  const data = await fetch(`https://reqres.in/api/users/${params.userID}`);
  const result = await data.json();
  return result.data;
}

async function singleUser({ params }) {
  const userData = await getStaticProps(params);

  return (
    <>
      <SingleUser fetchedData={userData} />
    </>
  );
}

export default singleUser;
