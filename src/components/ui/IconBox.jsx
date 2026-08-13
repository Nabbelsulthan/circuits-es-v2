const IconBox = ({
    icon: Icon,
    size = 30,
    variant = "green",
    className = ""
}) => {

    if (!Icon) {
        return null;
    }

    return (

        <div
            className={`
                icon-box
                icon-box-${variant}
                ${className}
            `.trim()}
        >

            <Icon
                size={size}
                strokeWidth={1.8}
            />

        </div>

    );

};

export default IconBox;