import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter ({ value, onChange }) {
    return(
        <>
            <label className={css.label_text}>Find contacts by name</label>
            <input
                className={css.input_filter}
                type="text"
                value={value}
                onChange={onChange}
            ></input>
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};