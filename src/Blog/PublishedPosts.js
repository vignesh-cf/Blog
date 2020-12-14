import { useSelector } from "react-redux";

export const PublishedPosts = () => {
  const globalState = useSelector(state => state);
  return (
    <>
      {globalState.publishedPosts.map((data, i) => {
        if (globalState.search) {
          if (data.postTittle.toLowerCase().includes(globalState.search))
            return (
              <div key={i}>
                <div>{data.postTittle}</div>
                <div>{data.postDescription}</div>
              </div>
            );
        } else
          return (
            <div key={i}>
              <div>{data.postTittle}</div>
              <div>{data.postDescription}</div>
            </div>
          );
      })}
    </>
  );
};
