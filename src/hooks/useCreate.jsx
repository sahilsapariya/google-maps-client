import React from "react";
import axios from "axios";

const useCreate = () => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleCreate = async (url, data, options = null) => {
    setLoading(true);
    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      if (res.data && res.data.token) {
        setResponse(res.data);
      } else {
        setError("No token found in the response.");
      }

      console.log("res in use create: ", res);

      return res.data;
    } catch (err) {
      setError(err.response ? err.response.data : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, handleCreate };
};

export default useCreate;
