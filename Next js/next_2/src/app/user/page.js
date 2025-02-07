import Link from "next/link";
import getUsers from "../../../services/getUsers"
 

const Page = async () => {
    const getUserList = getUsers();
    const users = await getUserList; 
    console.log(users);

  return (
    <div>
        <h1>Uers Lists</h1>
        {
            users.map((user) => (
                <h1 key={user.id}>
                    <Link href={`/user/${user.id}`}>{user.name}</Link>
                </h1>
            ))
        }
    </div>
  )
}

export default Page
