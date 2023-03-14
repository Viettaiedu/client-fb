
function Avatar({image ,alt="" , onClick , className}) {
    return (
        <>
            <img className={className} onClick={onClick} src={'/uploads/'+(image ? image : 'no-image.webp')} alt={alt}/>
        </>
      );
}

export default Avatar;