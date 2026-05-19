const FormEdit = () => (
    <form>
        <p>Id: parara</p>

        <label htmlFor="atividade">Atividade:</label>
        <input type="text" id="atividade" name="atividade" />

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
            <button type="submit">Salvar</button>
            <button>Voltar</button>
        </div>
    </form>
)

export default FormEdit;