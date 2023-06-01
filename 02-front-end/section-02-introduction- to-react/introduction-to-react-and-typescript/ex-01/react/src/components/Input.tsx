function Input() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <input type="text" onChange={ (event) => handleChange(event) } />
  );
}

export default Input;
