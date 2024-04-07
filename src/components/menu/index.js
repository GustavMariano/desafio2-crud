import "./index.css";
import { Link, useLocation } from "react-router-dom";
import usuarioService from "../../services/usuario-service";
import { AiOutlineHome } from 'react-icons/ai';

export default function Menu(){
    const logout = () => {
        usuarioService.sairDoSistema();
    };

    if(useLocation().pathname !== "/login"){
        return(
            <ul className="menu">
                <li>
                    <Link to='/home'>
                        <AiOutlineHome color="white" size={24}/>
                    </Link>
                </li>
                <li><Link onClick={logout}>Sair</Link></li>
            </ul>
        )
    } else {
        return null; 
    }
}
