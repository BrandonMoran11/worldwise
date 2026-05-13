import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";
import { flagemojiToPNG } from "../utils/helpers";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object,
};

export default CountryItem;
