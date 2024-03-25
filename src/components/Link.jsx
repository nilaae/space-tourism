import useNavigation from "../hooks/use-navigation";

function Link({ to, children, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <div
      onClick={handleClick}
      className={` ${currentPath === to ? activeClassName : null}`}
    >
      {children}
    </div>
  );
}

export default Link;
