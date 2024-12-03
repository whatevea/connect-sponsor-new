import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
    Box,
    Typography,
    Button,
    Avatar,
    Card,
    List,
    ListItem,
    Rating,
    TextField,
    CardContent,
    Stack
} from '@mui/material';

export default function ExtraComponents() {
    return (
        <div>
            <h1>Extra Components</h1>
            <SponsorshipCard />
            <OfferCard />
            <PaymentDetails />
            <div style={{ margin: '20px', width: "50%" }}>
                <RatingComponent />
            </div>
            <StartupPlanPopUp />
        </div>
    );
}

const SponsorshipCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#191153',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: '70%',
                    border: "1px solid #D0D0D0",
                    borderRadius: 3,
                    backgroundColor: 'white',
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: '800',
                            color: '#FFA51F',
                            ml: 4,
                            mt: 3
                        }}
                    >
                        Get Sponsored.ai
                    </Typography>
                    <Button>
                        <img
                            src="icons/cross.svg"
                            alt=""
                            style={{ width: 50, height: 50 }}
                        />
                    </Button>
                </Box>


                <CardContent>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        alignItems="center"
                    >
                        <Stack
                            alignItems="center"
                            spacing={1}
                        >
                            <Avatar
                                src="icons/images/tim_image.png"
                                sx={{
                                    width: 115,
                                    height: 115
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#FFA51F',
                                    fontWeight: 'semibold'
                                }}
                            >
                                Tim
                            </Typography>
                            <Typography
                                textAlign="center"
                                sx={{
                                    color: '#000000',
                                    fontWeight: '500'
                                }}
                            >
                                Founder & Ceo @Get ConnectSponsors.com
                            </Typography>
                        </Stack>

                        <Stack spacing={3}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    position: "relative",
                                    alignItems: 'flex-start',

                                }}
                            >
                                <img
                                    src="icons/triangle.svg"
                                    alt="leftTriangle.icon"
                                    style={{ marginTop: 32, width: 30, height: 30, position: 'absolute', left: -7 }}
                                />
                                <Box
                                    sx={{
                                        backgroundColor: '#F1EAEC',
                                        borderRadius: 3,
                                        p: 2,
                                        ml: 1,
                                        pb: 4
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#000000',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Hello Tim Here at Get ConnectSponsors.com we care about users, so to convince you to stay with us,
                                    </Typography>
                                    <Typography py={1} sx={{
                                        color: '#000000',
                                        fontWeight: '500',

                                    }}>
                                        I would like to offer you <Typography sx={{
                                            color: '#FFA51F',
                                            display: 'inline',
                                            fontWeight: '500',

                                        }}>50% OFF any package!</Typography>
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    borderRadius: 20,
                                    backgroundColor: '#0E9E59',
                                    '&:hover': {
                                        backgroundColor: '#0C7F4A'
                                    }
                                }}
                            >
                                Claim 50% Discount
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

const OfferCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#191153',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: '70%',
                    border: "1px solid #D0D0D0",
                    borderRadius: 3,
                    backgroundColor: 'white',
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '800',
                            fontSize: 27,
                            color: '#FFA51F',
                            ml: 4,
                            mt: 3
                        }}
                    >
                        Offer Accepted !
                    </Typography>
                    <Button>
                        <img
                            src="icons/cross.svg"
                            alt=""
                            style={{ width: 50, height: 50 }}
                        />
                    </Button>
                </Box>


                <CardContent sx={{ p: 4 }}>
                    <Typography
                        sx={{
                            fontWeight: 700, fontSize: 27,
                            color: "black",
                        }}>
                        Your discount code is applied!
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 500, fontSize: 20,
                            color: "#3F3E3E",
                            mt: 3,
                            lineHeight: 1.5,
                        }}
                    >
                        Thank you for accepting our offer. You got a fantastic discount, it'll apply to all the next packages you may upgrade!
                    </Typography>
                </CardContent>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: 20,
                        backgroundColor: '#0E9E59',
                        my: 2,
                        mx: 4,
                        width: '90%',
                        '&:hover': {
                            backgroundColor: '#0C7F4A'
                        }
                    }}
                >
                    Got it! Returm to App
                </Button>
            </Card>
        </Box>
    );
};


const PaymentDetails = () => {
    return (
        <Box sx={{ width: "50%", border: "1px solid white", borderRadius: 3 }}>
            <Typography variant='h4' mt={4} textAlign="center" >
                Payment Details
            </Typography>

            <Typography textAlign="center" fontSize={20} mt={2} lineHeight={1.5}>
                This is to Verify your account,
                <Typography fontWeight={600} fontSize={20}>
                    You will not be charged during 7 days free trail.
                </Typography>
            </Typography>

            <Box sx={{ p: 4 }}>

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
                    <Box>
                        <Typography textAlign="left" mb={1}>Card Number</Typography>
                        <TextField
                            fullWidth
                            placeholder="013xxxxxxxxxxxx"
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
                        <Typography textAlign="left" mb={1}>Name on Card *</Typography>
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
                        <Typography textAlign="left" mb={1}>Security Code *</Typography>
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
                <Box component="img" src="icons/images/cc_providers.png" sx={{}} />

            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#FFA51F", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 1, px: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box component="img" src="icons/lock.svg" sx={{}} />
                    <Typography sx={{ color: "white", fontWeight: 600 }}>
                        Encrypted, safe & secure.
                    </Typography>

                </Box>
                <Box component="img" src="icons/stripe.png" />

            </Box>


        </Box>
    )
}

const RatingComponent = () => {
    return (
        <Box sx={{ p: 2, borderRadius: 8, border: "1px solid #FFA51F" }} bgcolor="rgba(255, 255, 255, 0.1)">
            <Rating value={5}
                max={5}
            />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 1 }}>

                <Typography sx={{ lineHeight: 1.5, my: 4 }}>
                    As an agency owner, I was looking for a way to standardize my processes and improve my team's efficiency. The LTV Spot SOP Library has been a lifesaver in this regard, providing me with clear and actionable steps for success. highly recommend it to any agency looking to scale their business.
                </Typography>
                <Box display="flex" gap={1}>
                    <Box component="img" src="icons/images/tim_image.png" sx={{ width: 55, height: 55, borderRadius: "50%" }} />
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 22, color: "#FFA51F" }}>Timothy</Typography>
                        <Typography sx={{ fontWeight: 600, mt: 1 }}>eCommerceManager</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


const PlanCard = ({ title, price, monthlyPrice, features }: { title: string, price: string, monthlyPrice: string, features: string[] }) => (
    <Box sx={{
        bgcolor: "blue.700",
        p: 2,
        width: "100%",
    }}
    >
        <Typography
            variant="body2"
            textAlign="center"
            color="grey.300"
            sx={{
                fontSize: "19.33px",
                lineHeight: "21.3px",
                fontWeight: "800",
            }}
        >
            {title}
        </Typography>
        <Typography
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            sx={{
                textDecoration: "line-through",
            }}
        >
            {price}
        </Typography>
        <Typography
            variant="body1"
            component={"span"}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                variant="body1"
                component={"span"}
                sx={{
                    fontSize: "30px",
                    fontWeight: "800",
                    color: "#E9901A",
                    marginRight: "8px",
                }}
            >
                {monthlyPrice}
            </Typography>
            <Typography component="span" variant="body1">
                /Month
            </Typography>
        </Typography>
        <List sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {features.map((feature, index) => (
                <ListItem
                    key={index}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "10px",
                        backgroundColor: "#E9901A",
                        borderRadius: "12px",
                        width: "47%",
                        marginBottom: "5px",
                    }}
                >
                    <CheckCircleIcon sx={{ color: "green", fontSize: 16, mr: 0.5 }} />
                    <Typography>{feature}</Typography>
                </ListItem>
            ))}
        </List>
    </Box>
);

function StartupPlanPopUp() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "blue.900",
                color: "white",
            }}
        >
            <Box
                sx={{
                    bgcolor: "blue.800",
                    borderRadius: 2,
                    width: 581,
                    height: 729,
                    border: "1px solid white",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            component={"span"}
                            fontWeight="800"
                            textAlign="center"
                            color="orange"
                            mb={2}
                            mt={4}
                        >
                            Connect
                        </Typography>
                        <Typography
                            variant="h4"
                            component={"span"}
                            fontWeight="800"
                            textAlign="center"
                            color="orange.500"
                            mb={2}
                            mt={4}
                        >
                            Sponsors.Com
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={"icons/images/uparrow_image.png"}
                            alt="up arrow image"
                            style={{
                                width: "52px",
                                height: "52px",
                            }}
                        />
                    </Box>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        fontWeight="800"
                        fontSize="16px"
                        lineHeight="14px"
                        gutterBottom
                        mt={1}
                    >
                        Upgrade Now For More Better Faster
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        paddingX={11}
                        fontSize="12.94px"
                        lineHeight="19.91px"
                        mt={1}
                        gutterBottom
                    >
                        Upgrade Now More Credits, Brands, And Users; Achieve{" "}
                        <Typography
                            variant="body1"
                            component={"span"}
                            sx={{
                                color: "orange",
                            }}
                        >
                            Better Results
                        </Typography>
                        ; And Receive{" "}
                        <Typography
                            variant="body1"
                            component={"span"}
                            sx={{
                                color: "orange",
                            }}
                        >
                            Faster Support
                        </Typography>
                    </Typography>
                </Box>
                <hr
                    style={{
                        color: "white",
                        width: "100%",
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        gap: 2,
                        mt: 2,
                    }}
                >
                    <Box
                        sx={{
                            border: "1px solid white",
                            borderRadius: "15px",
                            position: "relative",
                            left: "26px",
                        }}
                    >
                        <PlanCard
                            title="Current Plan"
                            price="$510"
                            monthlyPrice="$497"
                            features={["10 Credits", "1 Brand", "2 Users", "Live Support"]}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mt: 2,
                            // position: "relative",
                            // top: "50%",
                        }}
                    >
                        <img src={"icons/images/leftmost_arrow.png"} alt="left arrow" />
                        <img src={"icons/images/middlearrow.png"} alt="middle arrow" />
                        <img src={"icons/images/rightmostarrow.png"} alt="right arrow" />
                    </Box>
                    <Box
                        sx={{
                            border: "1px solid white",
                            borderRadius: "15px",
                            position: "relative",
                            right: "23px",
                        }}
                    >
                        <PlanCard
                            title="New Plan"
                            price="$510"
                            monthlyPrice="$497"
                            features={["100 Credits", "5 Brands", "20 Users", "Live Support"]}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        mt: 2,
                        gap: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "green",
                            mt: 3,
                            width: "33%",
                            fontWeight: "bold",
                        }}
                    >
                        Confirm
                    </Button>
                    <Typography
                        variant="caption"
                        display="block"
                        textAlign="center"
                        color="grey.400"
                        sx={{
                            width: "70%",
                            fontSize: "12px",
                            fontWeight: "400",
                        }}
                    >
                        Did You Know That You Get Two Months Free And A 50% Discount When
                        You Select A New Plan
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            width: "50%",
                            bgcolor: "orange.500",
                            "&:hover": { bgcolor: "orange.600" },
                            mt: 1,
                            lineHeight: "18px",
                            fontWeight: "500",
                            fontSize: "15px",
                        }}
                    >
                        Switch To Yearly Now: 0% Off
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}