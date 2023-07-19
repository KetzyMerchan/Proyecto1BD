import { Card } from './../util/Card'
import { CreateUser} from './Form'
import { TableBody } from './Table'
import { UserData } from './UserData'

export const User = () =>{
    return(
        <Card
                title='Lista de Usuarios'
                createComponent={<CreateUser />}
                tableComponent = { <TableBody data = {UserData}/>}
        />
    )
}