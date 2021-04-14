import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import styles from "./CallMe.module.css";
import callImage from "./call-back.svg";
import { Icon } from "semantic-ui-react";

function CallMe() {
  const { handleSubmit, register, errors } = useForm();
  const [callMeState, toggleCallMeState] = useState(false);
  const onSubmit = ({ username, password }) => {
    console.log("Hi");
  };
  return (
    <div
      className={styles.callMe + " " + `${callMeState ? styles.expanded : ""}`}
    >
      <div className={styles.callMeHeader}>
        <div>
          <img src={callImage} className={styles.callImage} />
        </div>
        <div className={styles.callMeHeaderTitleBlock}>
          <p className={styles.callMeHeaderTitle}>Заказать звонок</p>
        </div>
        <div className={styles.callMeExpandButton}>
          <Icon
            name="angle up"
            size="big"
            color="orange"
            onClick={() => {
              toggleCallMeState(!callMeState);
              console.log(callMeState);
            }}
          />
        </div>
      </div>
      <div className={styles.callMeForm}>
        <h2 className={styles.formTitle}>Мы вам перезвоним</h2>
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
              fullWidth
              inputRef={register({
                required: "Введите телефонный номер",
                validate: (value) => value !== "admin" || "Nice try!",
              })}
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
            />
          </div>
          <button type="submit" className={styles.calculateButton}>
            Связаться со мной
          </button>
        </form>
      </div>
    </div>
  );
}

export default CallMe;
