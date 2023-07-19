import { Card } from './../util/Card'
import {CreateContract} from './Form'
import { TableBody } from './Table'
import { data } from './ContractData'

export const Contracts = () =>{
    return(
        <Card
                title='Lista de Contrataciones'
                createComponent={<CreateContract />}
                tableComponent = { <TableBody data = {data}/>}
        />
    )
}