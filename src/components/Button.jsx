export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex whitespace-nowrap overflow-hidden rounded-full font-medium text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 shadow-lg shadow-cyan-500/20 hover:shadow-pink-500/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  const Component = href ? "a" : "button";

  return (
    <Component className={classes} href={href} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
