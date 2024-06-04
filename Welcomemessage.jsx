import styles from "./Welcomemessage.module.css";
import { ImCheckmark } from "react-icons/im";
const Welcomemessage = () => {
  return (
    <p classNameName={styles.Welcomemessage}>
      Tasks Done
      <ImCheckmark />
    </p>
  );
};
export default Welcomemessage;
