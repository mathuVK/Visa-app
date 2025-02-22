import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content = {} }) {
  // Ensure content properties have default values to prevent errors
  const {
    brand = {},
    socials = [],
    menus = [],
    copyright = ""
  } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          {brand.route && brand.image && (
            <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
              <MKBox>
                <Link to={brand.route}>
                  <MKBox component="img" src={brand.image} alt={brand.name || "Brand"} maxWidth="2rem" mb={2} />
                </Link>
                <MKTypography variant="h6">{brand.name || "Brand Name"}</MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" mt={3}>
                {socials.map(({ icon, link }, key) => (
                  <MKTypography
                    key={link || key}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    color="dark"
                    opacity={0.8}
                    mr={key === socials.length - 1 ? 0 : 2.5}
                  >
                    {icon}
                  </MKTypography>
                ))}
              </MKBox>
            </Grid>
          )}
          {menus.map(({ name: title, items = [] }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route || "#"}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          {copyright && (
            <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
              {copyright}
            </Grid>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      route: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
    }),
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node,
        link: PropTypes.string,
      })
    ),
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            route: PropTypes.string,
            href: PropTypes.string,
          })
        ),
      })
    ),
    copyright: PropTypes.string,
  }),
};

export default DefaultFooter;
