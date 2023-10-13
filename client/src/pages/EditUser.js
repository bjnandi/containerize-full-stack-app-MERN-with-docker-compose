import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditUser = ({ match }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userid = pathname.substring(pathname.lastIndexOf("/") + 1);

  const [data, setData] = useState({
    name: "",
    image: "",
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/${userid}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e?.target?.files[0] : e?.target?.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data?.image);
      formData.append("name", data?.name);

      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/${userid}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (res.ok) {
        setData({ name: "", image: "" });
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditUser;
