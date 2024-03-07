import "./Form.css"

function Form({ label, name, type }) {
    return (
      <div className='element'>
        <label htmlFor={name}>{label}:</label>
        <input type={type} id={name} />
      </div>
    )
}

export default Form
