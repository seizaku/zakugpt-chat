const AuthForm = ({ children, ...props }) => {
  return (
    <form
      {...props}
      className="grid place-items-center gap-3 rounded-md border p-12"
    >
      {children}
    </form>
  );
};

export default AuthForm;
