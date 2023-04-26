
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Loader = () => {
  const store = useSelector(state => state.storeDetails);
  useEffect(() => {
    console.log({store})
  }, [])

  return <>loader</>;
};

export default Loader;
