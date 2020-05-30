import React from 'react';
import PropTypes from 'prop-types';

const CheckIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z' />
    </svg>
  );
};

const Checkbox = props => {
  const { className, text, type } = props;

  if(type && type !== 'checkbox')
    return console.warn(
      `\`Checkbox\` can only accept a \`type\` prop of "checkbox". Received "${props.type}", which was discarded and replaced by "checkbox".`
    );

  return (
    <label className={ className }>
      <span>{ text || '' }</span>
      <input { ...props } className={ undefined } type='checkbox' />
      <CheckIcon />
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string
};

export default Checkbox;