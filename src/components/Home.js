// Home.js file
import { useEffect, useState } from "react";
import supabaseClient from "../supabaseClient";

const Home = () => {

  const [group, setGroup] = useState(null)

  useEffect(() => {
    supabaseClient
      .from("group")
      .select("*")
      .then(({ data, error }) => {
        if (!error) {
          // setGroup(data)
          console.log(data)
          setGroup(data)
        }
      })

  }, [])

  return (
    <>
      <div className="element">This is group title</div>
      {group?.map((e) => {
        return (
          <h1 key={e.id}>{e.title}</h1>
        );
      })}
    </>
  )
};
export default Home;
