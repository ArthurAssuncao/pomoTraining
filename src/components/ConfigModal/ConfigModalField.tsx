import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./ConfigModalField.module.scss";

interface ConfigModalFieldProps {
  icon?: string;
  name: string;
  value: any;
  handleClick: (value: any) => void;
}

const ConfigModalField = (props: ConfigModalFieldProps) => {
  const [valueNew, setValueNew] = useState("");
  const { icon, name, value, handleClick } = props;
  let valueCurrent = String(value).toLowerCase();

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValueNew(event.target.value.toLowerCase());
  };

  const click = () => {
    if (valueNew && valueCurrent !== valueNew) {
      handleClick(valueNew);
      valueCurrent = valueNew.toLowerCase();
      toast.success(`Campo ${name} atualizado com sucesso`);
    } else {
      toast.error(`Campo ${name} não foi atualizado`);
    }
  };

  return (
    <fieldset className={styles.container}>
      <div className={styles.valueCurrentWrapper}>
        <div className={styles.valueCurrentIcon}>
          {icon && <img src={icon} alt={name} />}
        </div>
        <span className={styles.valueCurrent}>{name}</span>
      </div>

      <input
        type="text"
        className={styles.valueNew}
        placeholder={`Atual é ${value}`}
        onChange={updateValue}
      ></input>

      <button className={styles.valueSaveButton} onClick={click}>
        Salvar
      </button>
    </fieldset>
  );
};

export { ConfigModalField };
