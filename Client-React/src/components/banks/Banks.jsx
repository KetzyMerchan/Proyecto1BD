import { Card } from './../util/Card'
import { CreateBank } from './Form'
import {TableBody} from './Table'
import { BanksData} from './BanksData'

export const Banks = () =>{
    return(
        <Card
                title='Lista de Banco disponilbes'
                createComponent={<CreateBank/>}
                tableComponent={<TableBody data = {BanksData}/>}
        />
    )
}