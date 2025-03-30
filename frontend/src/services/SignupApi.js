


export const signupUser = async (name, email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
      });
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  