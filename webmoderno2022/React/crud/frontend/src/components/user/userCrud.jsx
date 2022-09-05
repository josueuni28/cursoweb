import React, { Component } from "react";
import Main from "../templates/Main";
import axios from "axios"

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir.'
}

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Component {
    // Definindo o estado
    state = {
        user: { name: '', email: '' },
        list: []
    }

    // Criando o método de ciclo de vida
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // Criando uma função para limpar
    clear(){
        this.setState({ user: { name: '', email: '' } })
    }

    // Criando a função que atualiza ou adiciona um novo regstro no 'banco de dados'
    /* O Banco de Dados também precisa ser 'startado' para funcionar a requisão */
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url,user)
            .then(resp => {
                // Caso a requisição for bem sucedida, atualiza a lista de usuários e 'reseta' estado user
                const list = this.getUpdatedList(resp.data)
                this.setState({  user: { name: '', email: '' }, list })
            })
            .catch(error => console.log(error)) // Caso dê erro, imprime a mensagem no console
    }

    // Criando a função que atualiza a lista de usuários. O segundo parâmetro 'add' é aplicado ao fazer a remoção do usuário
    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)

        return list
    }

    /* Criando a função que atualiza o 'estado' atual conforme preenche os campos do formulário,
       para depois submeter */
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Criando a função que gera o formulário
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ms-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Criando a função para carregar o usuário seleciona para o 'estado'
    load(user) {
        this.setState({ user })
    }

    // Criando a função que remove um usuário
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    // Criando a função que gera a tabela de registro dos usuários
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    // Função que renderiza as linhas da tabela com o usuários cadastrados
    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>{/* É preciso informar uma 'key' única para cada elemento quando se renderiza 'jsx' em array no React  */}
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ms-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}