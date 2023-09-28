
const OrderList = () => {
  // Sample data for the order list
  const orders = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      service: 'Web Development',
      payWith: 'Credit Card',
      status: 'In Progress',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      service: 'Graphic Design',
      payWith: 'PayPal',
      status: 'Completed',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      service: 'Mobile App Development',
      payWith: 'Stripe',
      status: 'Pending',
    },

    {
        id: 4,
        name: 'John Doe',
        email: 'johndoe@example.com',
        service: 'Web Development',
        payWith: 'Credit Card',
        status: 'In Progress',
      },
      {
        id: 5,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        service: 'Graphic Design',
        payWith: 'PayPal',
        status: 'Completed',
      },
      {
        id: 6,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        service: 'Mobile App Development',
        payWith: 'Stripe',
        status: 'Pending',
      },

  ];

  return (
    <div className="flex m-4 lg:m-10 items-center h-auto ">
      <div className="bg-white shadow-sm p-8 rounded-lg overflow-auto h-full lg:w-full w-[360px]">
        <table className="min-w-full table-auto ">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-[#F5F6FA] rounded-md">Name</th>
              <th className="py-2 px-4 bg-[#F5F6FA] rounded-md">Email ID</th>
              <th className="py-2 px-4 bg-[#F5F6FA] rounded-md">Service</th>
              <th className="py-2 px-4 bg-[#F5F6FA] rounded-md">Pay With</th>
              <th className="py-2 px-4 bg-[#F5F6FA] rounded-md">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-4 px-6">{order.name}</td>
                <td className="py-4 px-6">{order.email}</td>
                <td className="py-4 px-6">{order.service}</td>
                <td className="py-4 px-6">{order.payWith}</td>
                <td className="py-4 px-6">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
