import { useDispatch, useSelector } from 'react-redux';
import { setBurger } from '@/store/slice/counterSlice';
import { RootState } from '@/store';

const Hamburger = () => {
  const { burger } = useSelector((state: RootState) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <label
      htmlFor="burger"
      className={`z-50 cursor-pointer md:hidden flex flex-col justify-center items-center h-7 w-7 p-px`}
    >
      <input
        type="checkbox"
        checked={burger}
        onChange={() => dispatch(setBurger(!burger))}
        id="burger"
        className="hidden"
      />
      <span
        className={`${
          !burger ? 'bg-custom-dark' : 'bg-custom-light'
        } w-6 h-[3px] block mb-[4px] rounded-sm ${
          burger
            ? 'transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]'
            : 'transform origin-top-left transition duration-1000'
        }`}
      ></span>
      <span
        className={`${
          !burger ? 'bg-custom-dark' : 'bg-custom-light'
        } w-6 h-[3px] block mb-[4px] rounded-sm ${
          burger
            ? 'transform scale-0 opacity-0 transition duration-1000'
            : 'transform scale-100 opacity-100 transition duration-1000'
        }`}
      ></span>
      <span
        className={`${
          !burger ? 'bg-custom-dark' : 'bg-custom-light'
        } w-6 h-[3px] block  rounded-sm ${
          burger
            ? 'transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px'
            : 'transform origin-top-left transition duration-1000'
        }`}
      ></span>
    </label>
  );
};
export default Hamburger;
