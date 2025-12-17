import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const redirectMap: Record<string, string> = {
  "/onde-ficar-amsterdam": "/hospedagem",
  "/quem-e-o-du": "/sobre",
  "/bate-volta-amsterdam": "/arredores",
  "/coffeeshops-amsterdam": "/coffeeshops",
  "/transporte-amsterdam": "/transporte",
  "/onde-comer-amsterdam": "/gastronomia",
  "/planejamento-viagem": "/planejamento",
};

export function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const newPath = redirectMap[location.pathname];
    if (newPath) {
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}
