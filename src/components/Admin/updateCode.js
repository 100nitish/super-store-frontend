  // const handleStatusChange = async (index, newStatus) => {
  //   const updatedUsers = [...user];
  //   const userToUpdate = updatedUsers[index];

  //   try {
  //     const response = await axios.put(`/api/users/${userToUpdate._id}`, {
  //       status: newStatus,
  //     });

  //     if (response.status === 200) {
  //       updatedUsers[index].status = newStatus;
  //       setUser(updatedUsers);
  //       alert("User status updated successfully.");
  //     } else {
  //       throw new Error("Failed to update user status.");
  //     }
  //   } catch (error) {
  //     console.error("Error updating user status:", error);
  //     alert("Failed to update user status.");
  //   }
  // };


  // const handleDelete = async (indexToDelete) => {
  //   const userToDelete = user[indexToDelete];

  //   try {
  //     const response = await axios.delete(`/api/users/${userToDelete._id}`);

  //     if (response.status === 200) {
  //       const updatedUsers = user.filter((_, index) => index !== indexToDelete);
  //       setUser(updatedUsers);
  //       alert("User deleted successfully.");
  //     } else {
  //       throw new Error("Failed to delete user.");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //     alert("Failed to delete user.");
  //   }
  // };
