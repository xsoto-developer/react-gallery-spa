import { useContext } from "react"
import { AuthContext } from "../auth"

export const PublicRouter = ({children}) => {

    const { logged } = useContext(AuthContext);

    return (!logged) ? children : <Navegate to='/marvel' />
}
