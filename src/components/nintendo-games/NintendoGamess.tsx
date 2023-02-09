import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
function NintendoGamess() {
    const xboxGames = useAppSelector((s) => s.NintendoGames.articles);
    let { id } = useParams()
    let xx = xboxGames.find((e) => e.id === id)

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <img src={xx?.image} alt="" />
            <br />
            <br />
            <p>{xx?.description}</p>
            <br />
            <br />
            <p>{xx?.company}</p>
            <br />
            <br />

            <br />
            <br />
            <p>{xx?.nameOfGame}</p>
            <br />

        </div>
    )
}

export default NintendoGamess