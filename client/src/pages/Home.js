import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row center">
      {users?.map((user) => (
        <div className="card me-3 mt-2 p-0" key={user._id}>
          <img src={user.avatar} alt="" width={"100%"} height={200} />
          <div className="p-4">
            <h4 className="text-center">{user.name}</h4>
            <div className="d-flex justify-content-between align-items-center">
              <Link
                to={`/edit/${user._id}`}
                style={{ textDecoration: "none" }}
                className="edit-button"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(user._id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
