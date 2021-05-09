import styles from "./CalculatePrice.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import * as axios from "axios";

function CalculatePrice() {
  // const [showPassword, setPasswordVisibility] = useState(false)
  // const togglePasswordVisibility = () => setPasswordVisibility(!showPassword)
  const { handleSubmit, register } = useForm();
  const onSubmit = ({ name, phone }, e) => {
    // console.log(e.name)
    // console.log(name, phone);
    // e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: { name: name, phone: phone },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        e.target.reset();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Получить консультацию</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.textField}>
          <TextField
            name="name"
            label="Имя"
            defaultValue=""
            fullWidth
            inputRef={register({
              required: "This field is required!",
              validate: (value) => value !== "admin" || "Nice try!",
            })}
          />
        </div>
        <div className={styles.textField}>
          <TextField
            name="phone"
            label="Телефон"
            placeholder="8(9**)-***-**-**"
            // variant="outlined"
            // defaultValue="Nf<U4f<rDbtDxAPn"
            fullWidth
            inputRef={register({
              required: "Введите телефонный номер",
              validate: (value) => value !== "admin" || "Nice try!",
            })}
            // {...(errors.password && {
            // 	error: true,
            // 	helperText: errors.password.message,
            // })}
            InputProps={
              {
                // endAdornment: <InputAdornment position="end"></InputAdornment>,
              }
            }
          />
        </div>
        {/* {isFailed && (
					<p className={styles.badRequestError}>
						Request failed, try once more
					</p>
				)} */}
        <button type="submit" className={styles.calculateButton}>
          Связаться со мной
        </button>
      </form>
    </div>
  );
}

export default CalculatePrice;
