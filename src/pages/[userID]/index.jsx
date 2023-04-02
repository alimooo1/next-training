import SingleUser from "@/components/Users/SingleUser/SingleUser";

function index() {
  return (
    <>
      <SingleUser />
    </>
  );
}

export default index;

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const data = await fetch(`https://reqres.in/api/users/${params.userID}`);
  const result = await data.json();
  const user = result.data;
  return user;
}
