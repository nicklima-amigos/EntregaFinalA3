export default function FormField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
}) {
  return (
    <div className='form-group mt-2 mb-2'>
      <label>{label}</label>
      <input
        type={type}
        className='form-control'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
