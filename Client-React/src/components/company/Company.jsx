import { Card } from './../util/Card'
import { CreateCompany} from './Form'
import { TableBody } from './Table'
import { Data } from './CompanyData'

export const Company = () =>{
    return(
        <Card
                title='Empresas registradas'
                createComponent={<CreateCompany />}
                tableComponent = { <TableBody data= {Data}/>}
        />
    )
}