import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPageApi = () => {
  const [users, setUsers] = useState([]);
  const [eDeyLoad, setEDeyLoad] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setEDeyLoad(true);

    axios
      .get(
        "https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1IYh2sdL4Z7hDlAFhu1N6Sl5FF4LaV8smMfRTHfWYQgU&sheetName=Sheet1"
      )
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data.data);
        // console.log(response.data.status);
        setUsers(response.data.data);
      });
      console.log(users.description)
  };
  return (
    <>
      <div className="h-screen">
        Axios Page: Working with apis (GET Request)
        {users?.map((item, idx) => (
          <div key={idx}>
            <p>{item["first_name"]}</p>
          </div>
        ))}
      </div>
    </>
  );
};
