import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../components/home/Home"
import UserCrud from "../components/user/userCrud"

/* Criando as Rotas para os Componentes 'Home' e 'UserCrud' */

export default props =>
    <Routes>
        {/* Como também tem uma rota começando com a barra "/users", o 'exact' é para informar que
            tem que ser a URL exata, nesse caso apenas "/" para ir para o Componente 'Home'. */}
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} /> {/* Qualquer outra URL vai para o 'Home' */}
    </Routes>