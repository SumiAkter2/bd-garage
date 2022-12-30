import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          paddingRight: "30px",
          color: match ? "white" : "white",
          textDecoration: match ? "underline" : "none",
          borderColor: match ? "red" : "blue",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}
export default CustomLink;
