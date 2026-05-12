import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <h3 className={styles.name}>{city.cityName}</h3>
      <span className={styles.country}>{city.country}</span>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;
