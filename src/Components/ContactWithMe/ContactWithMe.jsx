import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { TextField } from "@material-ui/core";
import styles from "./ContactWithMe.module.css";

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

function ContactWithMe() {
  const { handleSubmit, register } = useForm();
  const onSubmit = ({ name, phone }) => {
    console.log(name, phone);
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
    numberformat: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <section className={styles.contactWithMe}>
      <div className={styles.callMeFormContainer}>
        <div className={styles.sectionTitleContainer}>
          <h2 className={`sectionTitle ${styles.sectionTitle}`}>
            {["Оставить заявку"].map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.callMeForm}>
          <div className={styles.inputField}>
            <TextField
              name="name"
              label="Имя"
              defaultValue=""
              fullWidth
              inputRef={register({
                required: "This field is required!",
              })}
            />
          </div>
          <div className={styles.inputField}>
            <TextField
              inputRef={register({
                required: "This field is required!",
              })}
              label="Телефон"
              className={styles.phoneField}
              value={values.numberformat}
              onChange={handleChange}
              name="phone"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
              fullWidth
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Связаться со мной
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactWithMe;
