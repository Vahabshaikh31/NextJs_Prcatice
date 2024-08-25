export async function fetchingData() {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data;
    console.log(error.message);
  }
}

export default async function serverSideDataFetching() {
  const data = await fetchingData();
  return (
    <div>
      {data.users.map((user) => (
        <h2 key={user.id}>{user.firstName}</h2>
      ))}
    </div>
  );
}
