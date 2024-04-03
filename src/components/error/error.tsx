import { useAppDispatch } from '../../app/hooks';
import { setError } from '../../store/action';
import './source/error.css';

type TErrorModal = {
  error: string;
}

export const ErrorModal = ({ error }: TErrorModal) => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(setError(null));
  return (
    <div className={error ? 'overlay' : 'overlay hidden'}>
      <section className='modal'>
        <div className="flex">
          <button className="btn-close" onClick={handleClick}>⨉</button>
        </div>
        <div>
          <h3 className='error-title'>{error}</h3>
        </div>
        <button className="btn" onClick={handleClick}>Закрыть</button>
      </section>
    </div >
  );
};
