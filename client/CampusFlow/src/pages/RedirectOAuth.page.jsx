import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAccessToken } from "../Services/githubOAuth.service";

function RedirectOAuth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("github-access-token");
    if (token) navigate("/dashboard");

    const code = searchParams.get("code");
    if (!code) navigate("/login");
    getAccess(code);
  }, []);

  async function getAccess(code) {
    try {
      console.log("getaccess", code);
      const token = await getAccessToken(code);
      localStorage.setItem("github-access-token", token);
      console.log("token", token);
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }



  return (
   <div></div>
  );
}

export default RedirectOAuth;
