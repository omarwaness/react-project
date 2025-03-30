

// api.js
export const loginUser = async (email, password) => {
    try {
      const res = await fetch("https://react-project-nbir.onrender.com/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  