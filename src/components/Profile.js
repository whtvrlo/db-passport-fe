import { useEffect, useState } from "react";

function Profile({ user, setUser }) {

    const [passwordHash, setPasswordHash] = useState("");

    useEffect(()=> {
    
            const fetchData = async () => {
                const res = await fetch(`http://localhost:5000/user/${user.id}`,
                    {
                        "method": "GET",
                        "mode": "cors",
                        "headers": {
                            "Content-Type": "application/json"
                        }
                    }
                );
                const data = await res.json();
                setPasswordHash(data.msg.passwordHash);
                console.log("works!!!!!!!!")
                console.log(data)
            };
        
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
        

    }, [user]);

    return (
        <>
            <h1>{user ? user.username : ""}</h1>
            <h1>{passwordHash}</h1>
            <p>Profiule</p>
        </>
    )
}

export default Profile;

// import { useEffect, useState } from "react";

// function Profile({ user, setUser }) {
//     const [createdAt, setCreatedAt] = useState("");
//     // const [passwordHash, setPasswordHash] = useState("");



//     useEffect(()=> {
//         if (user) {
//             const fetchData = async () => { // would translate to http://localhost/user/:id
//                 const res = await fetch(`http://localhost/user/${user.id}`,
//                     {
//                         "method": "GET",
//                         "mode": "cors",
//                         "headers": {
//                             "Content-Type": "application/json"
//                         }
//                     }
//                 );
//                 const data = await res.json();
//                 console.log(data)
//                 setCreatedAt(data.createdAt);
//                 // setPasswordHash(data.msg.passwordHash);
//             };
//             try {
//                 fetchData();
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }, [user]);

//     return (
//         <>
//             <h1>{user ? user.username : ""}</h1>
//             {/* <h1>{passwordHash}</h1> */}
//             <p>Profile</p>
//             <p>{createdAt}</p>
//         </>
//     )
// }

// export default Profile;