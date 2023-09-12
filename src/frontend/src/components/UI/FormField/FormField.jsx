import styles from './FormField.module.css';

export default function FormField({
  type = 'text',
  value,
  onChange,
  placeholder = '',
}) {
  return (
    <div className={'mt-2 mb-2 ' + styles.formField}>
      <input
        type={type}
        className=''
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
