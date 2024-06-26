function Button({link, label, ...rest}) {
    return (
      <a href={link}>
        <button type= 'button' {...rest}> {label} </button>
      </a>

    );

}
export default Button;