import React from "react";
import NavBar from "./components/NavBar";
import InputField from "./components/InputField";
import Problem from "./components/Problem";
import data from "./finalData.json";

import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userSolved, setUserSolved] = useState([]);

  return (
    <>
      <NavBar />
      <InputField
        userName={userName}
        setUserName={setUserName}
        userSolved={userSolved}
        setUserSolved={setUserSolved}
      />
      <div className="flex flex-wrap justify-center">
        {Object.entries(data).map(([key, value]) => {
          return <Problem data={value} userSolved={userSolved} />;
        })}
      </div>
      <div>
        <p className="flex justify-center text-lg m-6">
          Made with ❤ by &nbsp;
          <a href="https://codeforces.com/profile/nilesh.ky" target="_blank">nilesh.ky</a>{" "}
        </p>
      </div>
    </>
  );
}

export default App;
