const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
};

useEffect(() => {
    if (Object.values(errors).every(error => error === "")) {
        axios.post('http://localhost:3000/signup', values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }
}, [errors, navigate, values]);







const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:3000/signup', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err));
        }
    }