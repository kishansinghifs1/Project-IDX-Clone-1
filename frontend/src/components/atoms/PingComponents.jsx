import usePing from "../../hooks/apis/queries/usePing";
export const PingComponents =()=>{
  const { isLoading, data, isError, error } = usePing();

  if (isLoading) {
    return <>Loading......</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  console.log("Ping API data:", data);

  return (
    <>
      hello {data?.message || "No response"}
    </>
  );
}