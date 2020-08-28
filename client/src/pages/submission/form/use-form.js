import useInput from "./use-input";
import useFileInput from "./use-file-input";

/**
 * @param {number} min
 * @param {number} max
 * @return {import('./use-input').Validator}
 */
const lengthValidator = (min, max) => (value) => {
  if (value.length > max) {
    return `Maximum characters allowed: ${max}`
  } else if (value.length < min) {
    return `Minimum characters required: ${min}`
  }

  return ''
};

const useForm = () => {
  const name = useInput(lengthValidator(0, 100));
  const email = useInput(lengthValidator(0, 100));
  const note = useInput(lengthValidator(20, 5000));
  const file = useFileInput();

  const submit = (e) => {
    e.preventDefault();

    const validationStatus = [name, email, note, file].reduce((acc, cur) => {
      // reset error
      cur.resetError();

      const currentStatus = cur.validateInput();
      return acc && currentStatus;
    }, true);

    // some input are invalid
    if (!validationStatus) return;

    // proceed to submit
    console.log(name.value, email.value)
  };

  return {
    name,
    email,
    note,
    file,
    submit
  }

};

export default useForm
