import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMetrics } from "./MetricsSlice";

const Data = () => {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.metrics.metrics);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://localhost:5000/cpu");
        const data = await response.json();
        dispatch(setMetrics(data));
      } catch (error) {
        console.error("Error fetching metrics: ", error);
      }
    };
    const interval = setInterval(fetchMetrics, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return <>{console.log(metrics)}</>;
};
export default Data;
