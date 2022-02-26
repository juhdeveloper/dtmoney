import Modal from 'react-modal'
import closeImg from '../../assets/closeImg.svg'
import IncomeImg from '../../assets/IncomeImg.svg'
import OutCome from '../../assets/OutCome.svg'
import { FormEvent, useState} from 'react'
import { api } from '../../services/api'
import {Container, TransactionTypeContainer, RadioBox} from './styles'

    interface NewTransactionModalProps{
        isOpen: boolean;
        onRequestClose: () => void;
    }


export function NewTransactionModal ( {isOpen, onRequestClose }:NewTransactionModalProps) {
        const [title, setTitle] = useState('');
        const [value, setValue] = useState (0);
        const [category, setCategory] = useState('');
        const [type, setType] = useState ('deposit')

     function handleCreateNewTransaction(event: FormEvent){
            event.preventDefault()

            const data = {
                 title,  
                 category, 
                 value, 
                 type,}

                 api.post('/transactions', data)
    }

    return (
     
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay" 
                className="react-modal-content"
                >
        
              
         <button className="react-modal-close" type="button" onClick={onRequestClose}>
             <img src={closeImg} alt="closeModal" />
         </button>
         
            <Container onSubmit={handleCreateNewTransaction}>    
            <h2>Cadastrar Transação</h2>
            <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
            <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>

           <TransactionTypeContainer>

            <RadioBox type="button"
            onClick={()=>{ setType('deposit')}}
            isActive={type ==='deposit'}
            activeColor='green'
            >
             <img src={IncomeImg} alt="entradas"/>
             <span>
                 Entradas
             </span>
            </RadioBox>

            <RadioBox type="button"
            onClick={ ()=> { setType('withdraw')}}
            isActive={type ==='withdraw'}
            activeColor='red'

            >
             <img src ={OutCome} alt="saídas"/>
             <span>
                 Saídas
             </span>
            </RadioBox>


           </TransactionTypeContainer>


            <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
            </Container>   
            </Modal>
    )

}