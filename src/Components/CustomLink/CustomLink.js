import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          paddingLeft: "30px",
          paddingBottom: "30px",
          color: match ? "#FF533D" : "white",
          textDecoration: match ? "underline" : "none",
          marginBottom: "20px",
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
