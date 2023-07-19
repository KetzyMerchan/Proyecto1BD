import { AuthContext } from './../../application/AuthContext';
import { URL_USER } from '../../endpoint/EndPoint';
import Button from "react-bootstrap/esm/Button";
import { Card } from "../util/Card"
import {FormBody} from './../user/Form'

export const Setting = () => {

    return (
        <>
            <Card
                title='Datos de perfil'
                tableComponent={<FormBody/>}
            />
        </>

    )
}