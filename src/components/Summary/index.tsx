import { Container } from './styles';
import IncomeImg  from '../../assets/IncomeImg.svg'
import OutCome  from '../../assets/OutCome.svg'
import Total  from '../../assets/Total.svg'


export function Summary(){
return(

<Container>
   <div>
       <header>
           <p>Entradas</p>
           <img src={IncomeImg} alt=""></img>
       </header>
       <strong>R$ 1.000,00</strong>
   </div>

   

   <div>
       <header>
           <p>Saídas</p>
           <img src={OutCome} alt=""></img>
       </header>
       <strong> - R$ 490,00</strong>
   </div>



   <div className="righlight-background">
       <header>
           <p>Total</p>
           <img src={Total} alt=""></img>
       </header>
       <strong>R$ 510,00 </strong>
   </div>

</Container>
);
    
}