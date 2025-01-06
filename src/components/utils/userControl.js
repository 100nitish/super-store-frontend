import { deleteUser } from "../API/PostApi"; 

export const handleUserDelete = (index, users, setUser) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) {
    return;
  }

  const userId = users[index]._id;

  deleteUser(userId)
    .then(() => {
      
      setUser(users.filter((_, i) => i !== index));
      alert("User deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      alert("Failed to delete the user. Please try again.");
    });
};

export const fetchUsers = (userData, setUser, setLoading) => {
  setLoading(true);

  userData()
    .then((response) => {
      
      setUser(response.data.users || []);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    })
    .finally(() => {
      setLoading(false); 
    });
};
