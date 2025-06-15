import React from "react";
import cn from "@/lib/utils";

const Input = ({
    value,
    onChange,
    placeholder,
    type = "text",
    icon,
    iconPosition = "left",
    className,
    disabled = false,
    error,
    ...props
}) => {
    return (
        <div className={cn("relative w-full", className)}>
            <div
                className={cn(
                    "relative flex items-center w-full",
                    "bg-background/80 border border-border/80 rounded-lg",
                    "transition-all duration-200",
                    "hover:bg-background/90",
                    "focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary",
                    error && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/50",
                    disabled && "opacity-50 cursor-not-allowed"
                )}
            >
                {icon && iconPosition === "left" && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/70">
                        {icon}
                    </div>
                )}
                
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={cn(
                        "w-full px-4 py-2.5 bg-transparent",
                        "text-foreground/90 placeholder:text-foreground/50",
                        "focus:outline-none",
                        "disabled:cursor-not-allowed",
                        icon && iconPosition === "left" && "pl-10",
                        icon && iconPosition === "right" && "pr-10",
                        type === "number" && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    )}
                    {...props}
                />

                {icon && iconPosition === "right" && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/70">
                        {icon}
                    </div>
                )}
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input; 