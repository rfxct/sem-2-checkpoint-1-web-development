import PropTypes from "prop-types";
import "./styles.css";
import Navbar from "../navbar";

export default function PageWrapper(props) {
  return (
    <section className="container">
      <Navbar />
      {props.children}
    </section>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.children,
};
