import { useNavigate, useParams } from "react-router-dom";

export const Details = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      Details page {params.name}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
