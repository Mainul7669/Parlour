import  { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MakeAdmin = () => {

  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from your API or source
    fetch('https://parlour-server-seven.vercel.app/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find the user with the provided email
    const userToUpdate = users.find(user => user.email === email);

    if (userToUpdate) {
      // Update the user's role to admin
      const updatedUsers = users.map(user => {
        if (user.email === email) {
          return { ...user, role: 'admin' };
        }
        return user;
      });

      // Update the state with the updated users data
      setUsers(updatedUsers);

      // Send the updated user to the server
      sendUpdatedUserToServer(userToUpdate);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User role updated successfully',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'User not found',
        text: 'The provided email does not match any user',
      });
    }
  };

  // Function to send the updated user to the server
  const sendUpdatedUserToServer = (updatedUser) => {
    fetch(`https://parlour-server-seven.vercel.app/users/admin/${updatedUser._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // Handle success response from the server if needed
    })
    .catch(error => console.error('Error updating user on server:', error));
  };



  return (
    <div className="bg-[#F4F7FC] p-4 md:p-8 rounded-md">
   
      <form onSubmit={handleSubmit} className='lg:flex lg:items-center lg:space-x-10'>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full lg:w-[450px] md:w-1/2 px-4 py-3 bg-[#FFFFFF] text-black rounded-md focus:ring focus:ring-[#16322E]"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#F63E7B] text-white py-2 px-6 mt-2 lg:mt-4 rounded-md hover:bg-red-300 transition duration-300 ease-in-out"
          >
            Make Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
