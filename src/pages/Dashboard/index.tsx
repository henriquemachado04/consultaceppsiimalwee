import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Container, Title, Form, Ceps } from './styles';

interface CepProps {
    forms: [
        {
            name: string;
        }
    ]

    sprites: {
        other: {
            home: {
                front_default: string;
            }
        }
    }

}

const Dashboard: React.FC = () => {
    const [newCep, setNewCep] = useState('');
    const [ceps, setCep] = useState<CepProps[]>([]);
    const [inputError, setInputError] = useState('');

    const pesquisarCep = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!newCep){
            setInputError("Digite um poke para pesquisar.");
            return;
        }

        try{
            const response = await api.get(`pokemon/${newCep}`);
            const cepDados = response.data;

            setCep([...ceps, cepDados]);
            setInputError('');
            setNewCep('');

        } catch(err){
            setInputError('Poke não encontrado ou inválido.');
        }
    };

    return (
        <Container>
            <Title>Pesquise endereços por CEP</Title>

            <Form onSubmit={pesquisarCep}>
                <input
                    value={newCep}
                    type="number"
                    placeholder="Digite o CEP"
                    onChange={e => setNewCep(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <h1>{inputError}</h1>}

            <Ceps>
                {ceps.map(cep => (
                    <a href="#">
                        <div>
                            <p>{cep.forms[0].name}</p>
                            <img src={cep.sprites.other.home.front_default} alt="" />
                        </div>
                    </a>
                ))}
            </Ceps>
        </Container>
    );
};

export default Dashboard;