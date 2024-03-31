import { useState } from "react";
import { gbUsers } from "./learnApi";

export const Assignment2 = () => {
  const [gUser, setGUser] = useState(gbUsers);

  return (
    <div className="flex flex-wrap justify-center">
      {gUser.map((item, id) => (
        <div key={id} className=" flex flex-col h-[380px] w-[280px] ml-11 border-[1px] mt-11 items-center justify-center">
          <img className="h-[250px] w-[250px]" src={item.avatar_url} />
          <p className="mt-4">{item.login}</p>
          <a
            className="btn mt-2 w-[250px]"
            href={item.html_url}
            rel="noreferrer"
            target="_blank"
          >
            Check my Profile
          </a>
        </div>
      ))}
    </div>
  );
};
