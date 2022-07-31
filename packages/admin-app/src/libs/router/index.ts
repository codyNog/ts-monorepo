import { useLocation, useParams, useNavigate } from "react-router-dom";

export const useRouter = () => {
	const query = useParams();
	const location = useLocation();
	const push = useNavigate();

	return { query, location, push };
};
