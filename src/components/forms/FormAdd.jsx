const FormAdd = () => (
    <form>
        <label htmlFor="atividade">Atividade:</label>
        <input type="text" id="" name="atividade" />

        <label htmlFor="atividade">Descrição:</label>
        <input type="text" id="" name="desc" />

        <fieldset>
            <label htmlFor="prioridade">Prioridade:</label>
            <select id="prioridade" name="prioridade">
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
            </select>
        </fieldset>

        <div>
            <button type="submit">Adicionar</button>
            <button>Voltar</button>
        </div>
    </form>
)

export default FormAdd;