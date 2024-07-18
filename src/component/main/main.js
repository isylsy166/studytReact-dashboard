import { useSelector } from 'react-redux';

export default function Main(){

    const text = useSelector((state) => state.text); // Redux store에서 text 값 가져오기

    return(
        <>
            <div className='main-box'>
                <h1>{text}</h1>
            </div>
        </>
    )
}