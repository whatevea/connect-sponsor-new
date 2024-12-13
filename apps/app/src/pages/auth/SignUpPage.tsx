import { Box, Button, Typography, Divider, TextField } from "@mui/material";

const ConnectSponsors = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#191153",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 3,
      }}
    >
      <Box sx={{ width: "33%", textAlign: "center", display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Header Section */}
        <Typography variant="h4" fontWeight="bold">
          <Typography component="span" variant="h4" color="#FFA51F">
            Connect
          </Typography>
          Sponsors.Com
        </Typography>

        {/* Login Form Section */}
        <Box
          sx={{
            border: "1px solid",
            borderColor: "#3826B96B",
            p: 3,
            borderRadius: 2,
            background: "linear-gradient(to right, #3826B96B, transparent)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            #1 most used tool to find & convert sponsorship opportunities
          </Typography>
          <Typography color="#FFA51F" 
          sx={{ fontSize: 18, lineHeight: 1.5, paddingX: 2 }}
          >
            Sign up & get free access to the 1,000+ most active Youtube Sponsors in 30 languages
          </Typography>

          {/* Login Buttons */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              fullWidth
              sx={{ backgroundColor: "white", color: "black", textTransform: 'none' }}

            >
              Login with Google
              {<img style={{ paddingLeft: 20, padding: 10 }} src="icons/images/googleIcon.png" alt="google-icon" />}
            </Button>
            <Button
              fullWidth
              sx={{ backgroundColor: "white", color: "black", textTransform: 'none' }}
            >
              Login with Microsoft
              {<img style={{ padding: 10 }} src="icons/images/m_windowsIcon.png" alt="google-icon" />}
            </Button>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
              gap: 1,
              padding: "10px 0",
            }}
          >
            <Divider sx={{ flex: 1, borderColor: "#FFFFFF80" }} />
            <Typography sx={{ color: "#FFFFFF80", padding: "0 10px" }}>or</Typography>
            <Divider sx={{ flex: 1, borderColor: "#FFFFFF80" }} />
          </Box>

          {/* Input Fields */}
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              placeholder="Password *"

              sx={{ mb: 2, 
                backgroundColor: "white", 
                borderRadius: 1, 
                "& .MuiInputBase-input": { color: "black" }, 
               }}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              placeholder="Email"

              sx={{ backgroundColor: "white", 
                borderRadius: 1,     
                "& .MuiInputBase-input": { color: "black" },  }}
            />
          </Box>

          {/* Terms of Use */}
          <Typography sx={{ mt: 1 }}>
            By registering you agree to our
            <Typography
              component="a"
              href="#"
              sx={{ 
                color: "#FFA51F", 
                textDecoration: "none", 
                ml: 0.5, 
                ":hover": {
                  textDecoration: 'underline'
                } }}
            >
              terms of use.
            </Typography>
          </Typography>
        </Box>

        {/* Sign Up Button and Footer */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, paddingX: 3 }}>
          <Button
            fullWidth
            sx={{
              backgroundColor: "#0E9E59",
              color: "white",
              padding: 1,
              borderRadius: 50,
              fontWeight: "bold",
              textTransform: "none",
              fontSize: 25,

            }}
          >
            Sign up
          </Button>
          <Typography sx={{ paddingX: 5 }}>
            And get free access to the 1,000+ most active Youtube Sponsors in 30 languages
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectSponsors;

