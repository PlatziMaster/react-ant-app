import { useState, useEffect } from "react";
import axios from "axios";

function useGetUsers() {
  const [state, setState] = useState({
    data: [],
    status: "init",
  });

  const getUsers = async () => {
    setState({
      ...state,
      status: "loading",
    });
    try {
      const { data } = await axios("https://randomuser.me/api/?results=100");
      setState({
        ...state,
        data: data.results,
        status: "success",
      });
    } catch (error) {
      setState({
        ...state,
        status: "error",
      });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return state;
}

export default useGetUsers;
