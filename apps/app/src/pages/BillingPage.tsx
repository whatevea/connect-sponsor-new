
import React from "react";
import {
    Box,
    Button,
    Typography,
    TextField,
    Stack,
    Card,
    CardContent,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BillingPage: React.FC = () => {
    return (
        <main>
            <Box display="flex" gap={5} py={5} fontSize="1.25rem">
                <Button
                    variant="outlined"
                    endIcon={<AccountCircleIcon />}
                    sx={{ borderRadius: "16px", px: 3, py: 1 }}
                >
                    Account
                </Button>

                <Button
                    variant="contained"
                    endIcon={<AccountCircleIcon />}
                    sx={{ borderRadius: "16px", backgroundColor: "#E9901A", px: 3, py: 1 }}
                >
                    Billing
                </Button>
            </Box>

            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Plan and Billing
            </Typography>

            <Box display="flex">
                {/* Card Information Form */}
                <Card
                    sx={{
                        width: "50%",
                        border: 2,
                        borderRadius: "16px",
                        backgroundColor: "#191153",
                        color: "white",
                        py: 2,
                        textAlign: "center",
                    }}
                >
                    <CardContent>
                        <Typography variant="h4" fontWeight="bold" py={2}>
                            Card Information
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            You can change your Card information in the field below
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                py: 1.5,
                                mb: 1.5,
                            }}>
                            <TextField
                                placeholder="5294 9728 4444 2856"
                                variant="standard"
                                sx={{
                                    width: "80%",
                                    outline: "none",
                                    input: { color: "black" },
                                    '& .MuiInput-underline:before': {
                                        borderBottom: 'none',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottom: 'none',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none',
                                    }
                                }}
                            />
                            <Box component="img" src="icons/images/cc_image.png" sx={{ width: 30, height: 30 }} alt="Invoice" mx="auto" />
                        </Box>

                        <Stack
                            direction="row"
                            spacing={2}
                            pb={3}
                            justifyContent="space-between"
                        >
                            <TextField
                                fullWidth
                                placeholder="10/29"
                                variant="filled"
                                sx={{
                                    input: { color: "black" },
                                    borderRadius: "8px",
                                    backgroundColor: "white"
                                }}
                            />
                            <TextField
                                fullWidth
                                placeholder="527"
                                variant="filled"
                                sx={{
                                    marginX: 3,
                                    borderRadius: "8px",
                                    input: { color: "black" },
                                    backgroundColor: "white"
                                }}
                            />
                        </Stack>

                        <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
                            Be Charged during 7 days Free Trials
                        </Typography>

                        <Typography variant="h4" fontWeight="bold" py={2}>
                            Billing Information
                        </Typography>
                        <Typography variant="body1" gutterBottom my={2}>
                            You can change your billing information in the field below
                        </Typography>

                        <Box pb={2}>
                            <Stack spacing={2} pb={2}>
                                <Stack direction="row" spacing={2}>
                                    <Box width="50%">
                                        <Typography textAlign="left" mb={1}>Full Address *</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter Address"
                                            variant="filled"
                                            sx={{
                                                input: { color: "black" },
                                                borderRadius: "8px",
                                                backgroundColor: "white"
                                            }}
                                        />
                                    </Box>
                                    <Box width="50%">
                                        <Typography textAlign="left" mb={1}>City Name *</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter City"
                                            variant="filled"
                                            sx={{
                                                input: { color: "black" },
                                                borderRadius: "8px",
                                                backgroundColor: "white"
                                            }}
                                        />
                                    </Box>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Box width="75%">
                                        <Typography textAlign="left" mb={1}>State/Province *</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter State/Province"
                                            variant="filled"
                                            sx={{
                                                input: { color: "black" },
                                                borderRadius: "8px",
                                                backgroundColor: "white"
                                            }}
                                        />
                                    </Box>
                                    <Box width="25%">
                                        <Typography textAlign="left" mb={1}>Zip Code *</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter Zip Code"
                                            variant="filled"
                                            sx={{
                                                input: { color: "black" },
                                                borderRadius: "8px",
                                                backgroundColor: "white"
                                            }}
                                        />
                                    </Box>
                                </Stack>

                                <Box>
                                    <Typography textAlign="left" mb={1}>Country</Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Select Country"
                                        variant="filled"
                                        sx={{
                                            input: { color: "black" },
                                            borderRadius: "8px",
                                            backgroundColor: "white"
                                        }}
                                    />
                                </Box>
                            </Stack>

                            <Box display="flex" justifyContent="center" py={2}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#E9901A", borderRadius: "24px", px: 5 }}
                                >
                                    Save Changes
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                {/* Invoice Preview Section */}
                <Card
                    sx={{
                        width: "50%",
                        border: 2,
                        borderRadius: "16px",
                        background: "linear-gradient(to right, #191153, #191153)",
                        color: "white",
                        pt: 2,
                        textAlign: "center",
                    }}
                >
                    <CardContent>
                        <Typography variant="h4" fontWeight="bold" py={2}>
                            Upcoming Invoice
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            This is the preview of the invoice that will be billed
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12px",
                                p: 3,
                                mx: 2,
                                my: 3,
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                borderBottom={2}
                                pb={2}
                                color="orange"
                            >
                                <Typography>Description</Typography>
                                <Typography>Amount</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" py={2}>
                                <Typography>Starter 10+ VAT@20%</Typography>
                                <Typography color="orange">$29</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" py={2}>
                                <Typography>Total Discount</Typography>
                                <Typography color="orange">$0</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" py={2}>
                                <Typography>Total</Typography>
                                <Typography color="orange">$29</Typography>
                            </Box>
                        </Box>
                        <Typography variant="h4" fontWeight="bold" py={2}>
                            Paid Invoice
                        </Typography>
                        <Typography gutterBottom>
                            You can download your paid invoices here
                        </Typography>
                        <Box component="img" src="icons/images/box_image.png" alt="Invoice" sx={{ width: 256, height: 256 }} mx="auto" />
                    </CardContent>
                </Card>
            </Box>
        </main>
    );
};

export default BillingPage;
