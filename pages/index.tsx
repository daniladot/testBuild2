/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';

interface IDisp {
  type: string;
  payload: string;
}

const Home = (): JSX.Element => {
  const dispatch: any = useDispatch();

  return (
    <div>
      <h1>Ghbdlsdkfldkfl</h1>
      <div
        onClick={(): IDisp => dispatch({ type: 'TICK', payload: 'newName' })}
      >
        123
      </div>
    </div>
  );
};

export default Home;
