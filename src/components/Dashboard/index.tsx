import {Container} from './styles'
import {Summary} from '../Summary'
import { TransactionTables } from '../TransactiosTable';


export function Dashboard(){
return(

<Container>
    <Summary/>
    <TransactionTables/>
</Container>  
);
}