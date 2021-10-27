
const ListaDesplegable = () => {
    return (
        <div>
            <label for="Status">
              <select className="Lista" name="estado" id="estado">
                <option value="" selected>Status</option>
                <option value="">Disponible</option>
                <option value="">No disponible</option>
              </select>
          </label>
        </div>
    )
}

export default ListaDesplegable