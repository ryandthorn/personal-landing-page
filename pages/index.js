import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "98vw",
    margin: "0 auto",
    height: "90vh"
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden hidden",
    height: "500px",
    width: "300px",
    ["@media screen and (orientation:landscape)"]: {
      flexDirection: "row",
      height: "300px",
      width: "500px"
    },
    ["@media screen and (min-width: 600px)"]: {
      flexDirection: "row",
      height: "300px",
      width: "600px"
    }
  },
  svgIcon: {
    display: "block",
    height: "75%",
    width: "75%",
    margin: "0 auto"
  },
  externalLink: {
    display: "block",
    boxShadow: "2px 2px 4px 2px grey",
    height: "200px",
    width: "200px",
    color: "black",
    fontFamily: "'Roboto', sans-serif",
    textDecoration: "none",
    borderRadius: "10px"
  }
});

const Index = () => {
  const { container, linkContainer, svgIcon, externalLink } = useStyles();
  return (
    <div className={container}>
      <div className={linkContainer}>
        <a
          className={externalLink}
          href="https://github.com/ryandthorn"
          target="_blank"
        >
          <SvgIcon className={svgIcon}>
            <path
              fill="#000000"
              d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
            />
          </SvgIcon>
          <Typography align="center" variant="h4">
            Code
          </Typography>
        </a>
        <a
          className={externalLink}
          href="http://ryanthornbaritone.squarespace.com/"
          target="_blank"
        >
          <SvgIcon className={svgIcon}>
            <path
              fill="#000000"
              d="M18.5 5A1.5 1.5 0 1 1 17 6.5A1.5 1.5 0 0 1 18.5 5M18.5 11A1.5 1.5 0 1 1 17 12.5A1.5 1.5 0 0 1 18.5 11M10 4A5 5 0 0 0 5 9V10A2 2 0 1 0 7.18 8A3 3 0 0 1 10 6A4 4 0 0 1 14 10C14 13.59 11.77 16.19 7 18.2L7.76 20.04C13.31 17.72 16 14.43 16 10A6 6 0 0 0 10 4Z"
            />
          </SvgIcon>
          <Typography align="center" variant="h4">
            Music
          </Typography>
        </a>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
        `}</style>
      </div>
    </div>
  );
};

export default Index;
