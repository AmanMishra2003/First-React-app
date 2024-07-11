const preventDefaultBehaviour=function(e){
    e.preventDefault()
    console.log(e)
}
function FormComponent(){
    return (
        <form onSubmit={preventDefaultBehaviour}>
            <button>Submit</button>
        </form>
    )
}


export default FormComponent;