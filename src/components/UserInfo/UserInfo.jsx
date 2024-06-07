import { FETCH_USER } from "@/gql/queries";
import { useQuery } from "@apollo/client"
import { useEffect } from "react"


function UserInfo() {
    const { loading, error, data } = useQuery(FETCH_USER, {});


    // useEffect(() => {
    //     useQuery
    // }, [])


    return (
        <>
        trial
        </>
    )

}


export default UserInfo;
