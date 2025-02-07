import getUsers from "../../../../services/getUsers"

const Page = async (props) => {
     const getUserList = getUsers();
     const user = await  getUserList;
     const userId = props.params.userId;
     const userData = user[userId-1]; 
     console.log('UserId : ', user[userId-1]);
     console.log('User Data: ', userData); 

  return (
    <div >
        <h1>
      User Name  : {userData.name}
            
        </h1>
        <h1>
      User Id  : {userData.id}

        </h1>
        <h1>

      User Web Site  : {userData.website}
        </h1>
    </div>
  )
}

export default Page

export async  function generateStaticParams() {
    const getUserList = getUsers();
    const user = await  getUserList;
    return user.map(user => ({
        userId: user.id.toString() // toString cause it get the id in  string form for making static page
    }))
}
