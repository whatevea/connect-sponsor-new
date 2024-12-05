
import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    TextField,
    Stack,
    Card,
    CardContent,
} from "@mui/material";

const BillingPage: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\s/g, '');
        if (value.length > 19) return;

        // Format with spaces after every 4 digits
        const formatted = value.replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(formatted);
    };
    return (
        <main>
            <Typography variant="h4" fontWeight="bold" gutterBottom mt={5} pb={1.5}>
                Plan and Billing
            </Typography>

            <Box display="flex" gap={2} >
                {/* Card Information Form */}
                <Card
                    sx={{
                        width: "50%",
                        border: 2,
                        borderRadius: "16px",
                        backgroundColor: "#191153",
                        color: "white",
                        pt: 2,
                        textAlign: "center",
                        background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                    }}
                >
                    <CardContent sx={{ px: 5, }}>
                        <Typography variant="h5" fontWeight="bold">
                            Card Information
                        </Typography>
                        <Typography variant="body1" py={1} pb={2} gutterBottom>
                            You can change your Card information in the field below
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                py: 1,
                                mb: 2,
                            }}>
                            <TextField
                                placeholder="5294 9728 4444 2856"
                                variant="standard"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
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
                            pb={2}
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

                        <Typography variant="body1" gutterBottom sx={{ textAlign: "center", fontSize: 14 }}>
                            Be Charged during 7 days Free Trials
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" pt={2}>
                            Billing Information
                        </Typography>
                        <Typography variant="body1" gutterBottom my={1} pb={1.5}>
                            You can change your billing information in the field below
                        </Typography>

                        <Box>
                            <Stack spacing={2} pb={0.5}>
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

                            <Box display="flex" justifyContent="center" pt={2}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#E9901A", borderRadius: "24px", px: 6 }}
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
                        background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                        color: "white",
                        pt: 1,
                        textAlign: "center",
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" fontWeight="bold" py={2}>
                            Upcoming Invoice in 9 months.
                        </Typography>
                        <Typography variant="body1" pb={5} gutterBottom>
                            This is the preview of the invoice that will be billed
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12px",
                                p: 3,
                                mx: 4.4,
                                my: 0,
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
                        <Typography variant="h6" fontWeight="bold" py={1}>
                            Paid Invoice
                        </Typography>
                        <Typography gutterBottom>
                            You can download your paid invoices here
                        </Typography>
                        <Box component="img" src="icons/images/box_image.png" alt="Invoice" sx={{ width: 115, height: 115, pt: 1 }} mx="auto" />
                    </CardContent>
                </Card>
            </Box>
        </main>
    );
};

export default BillingPage;
