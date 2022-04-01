import {Container} from './styles'
import { useEffect } from 'react'
import { api }  from '../../services/api'

export  function TransactionTables(){

    useEffect( ()=>{
       api.get('http://localhost:3000/api/transactions')
          .then(response => console.log(response.data))


    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td >Desenvolvimento de Website</td>
                    <td className="deposit"> + R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td > 03/02/2022</td>
                    </tr>

                    <tr>
                    <td>Aluguel</td>
                    <td className="withdraw"> - R$1.000</td>
                    <td>Casa</td>
                    <td>03/02/2022</td>
                    </tr>
                    
                    <tr>
                    <td>Luz</td>
                    <td className="withdraw"> - R$130,00</td>
                    <td>Despesas</td>
                    <td>03/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
        )    ;
}