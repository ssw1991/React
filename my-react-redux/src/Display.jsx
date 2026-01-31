import { useSelector } from 'react-redux';

const Display = () => {
    const count = useSelector((state) => state.counter.count);
    return (
        <div><h2>Count in Display Component: {count}</h2></div>
  );
};

export default Display;