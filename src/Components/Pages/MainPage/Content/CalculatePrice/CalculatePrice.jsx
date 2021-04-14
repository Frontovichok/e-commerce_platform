import styles from "./CalculatePrice.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";

function CalculatePrice() {
  // const [showPassword, setPasswordVisibility] = useState(false)
  // const togglePasswordVisibility = () => setPasswordVisibility(!showPassword)
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = ({ username, password }) => {
    console.log("Hi");
  };
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Рассчитать стоимость</h2>
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
            // {...(errors.username && {
            // 	error: true,
            // 	helperText: errors.username.message,
            // })}
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
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
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
