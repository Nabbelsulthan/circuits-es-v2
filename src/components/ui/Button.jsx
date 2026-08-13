import { ArrowRight } from "lucide-react";

const Button = ({
    children,
    variant = "primary",
    href,
    to,
    icon = true,
    className = "",
    ...props
}) => {

    const classes = `
        btn
        btn-${variant}
        ${className}
    `.trim();

    const content = (
        <>
            <span>{children}</span>

            {icon && (
                <ArrowRight
                    size={18}
                    strokeWidth={2}
                />
            )}
        </>
    );

    if (to) {

        return (
            <a
                href={to}
                className={classes}
                {...props}
            >
                {content}
            </a>
        );

    }

    if (href) {

        return (
            <a
                href={href}
                className={classes}
                {...props}
            >
                {content}
            </a>
        );

    }

    return (
        <button
            className={classes}
            {...props}
        >
            {content}
        </button>
    );

};

export default Button;