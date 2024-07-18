import { useSelector } from 'react-redux';
import ConvasPage from '../ConvasPage/newCanvas';

export default function Main(){

    const menu_Id = useSelector((state) => state.id);
    const text = useSelector((state) => state.text); // Redux store에서 text 값 가져오기

    return(
        <>
            <div className='main-box'>
                <h1>{text}</h1>
                {menu_Id === 'menu01' && <ConvasPage/>}
                {menu_Id === 'menu02' && <p>음식 레시피?</p>}
                {menu_Id === 'menu03' && <p>뭐만들지.. 게시판?</p>}
            </div>
        </>
    )
}