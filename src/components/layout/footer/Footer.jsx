import { Box, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
       backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Vivero Verde Vida
      </Typography>
      <Typography variant="body2" gutterBottom>
        Síguenos en nuestras redes sociales
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton
          href="https://facebook.com" // Reemplaza con el enlace de Facebook de tu vivero
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <Facebook />
        </IconButton>

        <IconButton
          href="https://instagram.com" // Reemplaza con el enlace de Instagram de tu vivero
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <Instagram />
        </IconButton>

        <IconButton
          href="https://twitter.com" // Reemplaza con el enlace de Twitter de tu vivero
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <Twitter />
        </IconButton>

        <IconButton
          href="https://wa.me/1234567890" // Reemplaza con el enlace de WhatsApp de tu vivero
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <WhatsApp />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        © 2024 Vivero Verde Vida. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
