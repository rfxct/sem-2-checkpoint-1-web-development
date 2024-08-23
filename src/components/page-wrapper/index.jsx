import PropTypes from "prop-types";
import "./styles.css";
import Navbar from "../navbar";

export default function PageWrapper(props) {
  return (
    <>
      <Navbar />
      <section className="container">{props.children}</section>
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.children,
};
