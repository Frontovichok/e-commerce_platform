import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import MaskedInput from 'react-text-mask';
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";
import styles from "./CallMeFixedBlock.module.css";
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

function CallMeFixedBlock() {
  const { handleSubmit, register } = useForm();
  const [callMeState, toggleCallMeState] = useState(false);
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setValues({ ...values, phone: "" });
    // e.preventDefault();
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3002/send",
    //   data: this.state,
    // }).then((response) => {
    //   if (response.data.status === "success") {
    //     alert("Message Sent.");
    //     this.resetForm();
    //   } else if (response.data.status === "fail") {
    //     alert("Message failed to send.");
    //   }
    // });
  };

  const [values, setValues] = React.useState({
    phone: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.callMe + ` ${callMeState ? styles.expanded : ""}`}>
      <div className={styles.callMeHeader}>
        <div>
          <img src={callImage} className={styles.callImage} alt="callMe" />
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
            }}
          />
        </div>
      </div>
      <div className={styles.callMeForm}>
        <h2 className={styles.formTitle}>Мы вам перезвоним</h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className={styles.textField}>
            <TextField
              name="name"
              label="Имя"
              defaultValue=""
              fullWidth
              inputRef={register({
                required: "This field is required!",
                validate: (value) => value.length < 30 || "Nice try!",
              })}
            />
          </div>
          <div className={styles.textField}>
            <TextField
              name="phone"
              label="Телефон"
              className={styles.phoneField}
              value={values.phone}
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
              inputRef={register({
                required: "This field is required!",
                validate: (value) =>
                  value.match(/\d/g).length === 11 || "Nice try!",
              })}
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

export default CallMeFixedBlock;
