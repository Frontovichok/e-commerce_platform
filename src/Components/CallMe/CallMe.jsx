import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import MaskedInput from 'react-text-mask';
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";
import styles from "./CallMe.module.css";
import callImage from "./call-back.svg";
import { Icon } from "semantic-ui-react";
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="+7 (###) ###-##-##"
      allowEmptyFormatting
      mask="_"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function CallMe() {
  const { handleSubmit, register } = useForm();
  const [callMeState, toggleCallMeState] = useState(false);
  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  const [values, setValues] = React.useState({
    numberformat: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      className={styles.callMe + ` ${callMeState ? styles.expanded : ""}`}
    >
      <div className={styles.callMeHeader}>
        <div>
          <img src={callImage} className={styles.callImage} alt="callMe"/>
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
              label="Телефон"
              className={styles.phoneField}
              value={values.numberformat}
              onChange={handleChange}
              name="numberformat"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
              fullWidth
              InputLabelProps={{
                shrink: true,
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
