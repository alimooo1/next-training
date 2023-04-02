import SingleUser from "@/components/Users/SingleUser/SingleUser";

function index({ userData }) {
  return (
    <>
      <SingleUser fetchedData={userData} />
    </>
  );
}

export default index;

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(`https://reqres.in/api/users/${params.userID}`);
  const result = await data.json();
  const user = result.data;

  return {
    props: {
      userData: user,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userID: "1" } },
      { params: { userID: "2" } },
      { params: { userID: "3" } },
      { params: { userID: "4" } },
      { params: { userID: "5" } },
      { params: { userID: "6" } },
    ],
    fallback: false,
  };
}
