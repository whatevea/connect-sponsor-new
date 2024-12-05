import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function PricePage() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "10px",
                    // alignItems: "center",
                }}
            >
                <img
                    src="icons/images/Discount.png"
                    alt="discount logo"
                    style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        marginTop: "12px",
                    }}
                />
                <Box
                    sx={{
                        width: "2px",
                        background: "radial-gradient(circle,  #FFFFFF 0%, #191153 100%)",
                    }}
                ></Box>
                <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                    Discount code applied!: Get{" "}
                    <p style={{ color: "#FFA114" }}>
                        50% off
                    </p>
                    {" "}
                    the 1st year on all plans.
                </Typography>
            </Box>
            <Box style={{ display: "flex", gap: "14px" }} sx={{ marginTop: "18px" }}>
                <FreePlan />
                <StartupPlan />
                <ProPlan />
                <EnterprisePlan />
            </Box>
            {/* <Typography variant="h5">Plan & Pricing Page</Typography> */}
        </Box>
    );
}

const FreePlan = () => {
    const freePlan = {
        name: "Free",
        price: "$0.00",
        keyFeatures: [
            "1,000+ most active Youtube Sponsors in 30 languages",
            "20+ Data Points Per Sponsor",
            "CEO Contact Details & Social Media Profiles",
            "LinkedIn & Twitter/X Profiles",
            "Additional Decision Maker Details (CFOs, CMOs, Head Of Partnerships, Etc.)",
            "After day 7: Trial ends and your startup plan subscription starts",
            "1 Team Member",
        ],
        "What You're Missing": [
            "Direct Contact Details Of The Top 10,000 YouTube Channel Sponsors in 30 languages Every Month",
            "60,000+ Database Of All Historical Sponsors",
            "First Access To New Sponsors",
            "Limited Support",
            "Unlimited Team Members",
        ],
    };

    return (
        <Box
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "400",
                    marginBottom: "25px",
                    fontSize: "20px",
                }}
            >
                {freePlan?.name}
            </Typography>
            <Typography sx={{ marginBottom: 5, display: "flex", gap: "10px" }}>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "32px",
                    }}
                >
                    {freePlan?.price}
                </Typography>
                <Typography variant="body1" component="span">
                    /week
                </Typography>
            </Typography>
            <Box>
                {freePlan?.keyFeatures?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "400",
                        }}
                    >
                        <CheckIcon
                            sx={{ color: "#FFA114", width: "17px", height: "17px" }}
                        />
                        {item}
                    </Box>
                ))}
            </Box>
            <hr style={{ margin: "10px 0" }} />
            <Box>
                <Typography sx={{ color: "red", marginBottom: "10px" }}>
                    What You're Missing
                </Typography>
                {freePlan["What You're Missing"]?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "400",
                        }}
                    >
                        <CloseIcon sx={{ width: "17px", height: "17px" }} />
                        {item}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const StartupPlan = () => {
    const startupPlan = {
        name: "Startup Plan",
        price: "$247",
        keyFeatures: [
            "Direct Contact Details Of The Top 10,000 YouTube Channel Sponsors in 30 languages Every Month",
            "20+ Data Points Per Sponsor",
            "CEO Contact Details & Social Media Profiles",
            "Additional Decision Maker Details (CFOs, CMOs, Head Of Partnerships, Etc.)",
            "First Access To New Sponsors",
            "Email Support",
            "Access To Our Entire Network Of Partners Who Have Actively Contacted Us To Be Your Long-Term Partner",
            "1 Team Member",
        ],
        "What You're Missing": [
            "Unlimited Team Members",
            "60,000+ Database Of All Historical Sponsors",
        ],
    };

    return (
        <Box
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "400",
                    marginBottom: "25px",
                    fontSize: "20px",
                }}
            >
                {startupPlan?.name}
            </Typography>
            <Typography sx={{ marginBottom: "15px", display: "flex", gap: "8px" }}>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        textDecoration: "line-through",
                        color: "#FFA114",
                        marginRight: "5px",
                        fontSize: "20px",
                        fontWeight: "bolder",
                    }}
                >
                    $497
                </Typography>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "32px",
                    }}
                >
                    {startupPlan?.price}
                </Typography>

                <Typography variant="body1" component="span">
                    /mo
                </Typography>
            </Typography>
            <Box
                sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                    marginY: 3,
                }}
            >
                (-50+% First Year Discount)
            </Box>
            <Box>
                {startupPlan?.keyFeatures?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "400",
                        }}
                    >
                        <CheckIcon
                            sx={{ color: "#FFA114", width: "17px", height: "17px" }}
                        />
                        {item}
                    </Box>
                ))}
            </Box>
            <hr style={{ margin: "10px 0" }} />
            <Box>
                <Typography sx={{ color: "red", marginBottom: "10px" }}>
                    What You're Missing
                </Typography>
                {startupPlan["What You're Missing"]?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "400",
                        }}
                    >
                        <CloseIcon sx={{ width: "17px", height: "17px" }} />
                        {item}
                    </Box>
                ))}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: '#E9901A',
                            paddingX: 6,
                            paddingY: 1.3,
                            borderRadius: 10,
                            marginTop: 14
                        }}
                    >
                        Confirm Upgrade
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

const ProPlan = () => {
    const proPlan = {
        name: "Pro Plan",
        price: "$247",
        keyFeatures: [
            "Direct Contact Details Of The Top 10,000 YouTube Channel Sponsors in 30 languages Every Month",
            "20+ Data Points Per Sponsor",
            "CEO Contact Details & Social Media Profiles",
            "Additional Decision Maker Details (CFOs, CMOs, Head Of Partnerships, Etc.)",
            "First Access To New Sponsors",
            "Email Support",
            "Access To Our Entire Network Of Partners Who Have Actively Contacted Us To Be Your Long-Term Partner",
            "1 Team Member",
            "60,000+ Database Of All Historical Sponsors",
            "3 Team Members",
        ],
        "What You're Missing": ["Unlimited Team Members"],
    };

    return (
        <Box
            sx={{
                backgroundColor: "#2A1D91",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "400",
                        marginBottom: "25px",
                        fontSize: "20px",
                    }}
                >
                    {proPlan?.name}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "400",
                        marginBottom: "25px",
                        fontSize: "12px",
                        borderRadius: "90.5px",
                        backgroundColor: "white",
                        padding: "5px 10px",
                        color: "#FFA114",
                    }}
                >
                    Most Popular
                </Typography>
            </Box>

            <Typography sx={{ marginBottom: "15px", display: "flex", gap: "8px" }}>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        textDecoration: "line-through",
                        color: "#FFA114",
                        marginRight: "5px",
                        fontSize: "20px",
                        fontWeight: "bolder",
                    }}
                >
                    $497
                </Typography>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "32px",
                    }}
                >
                    {proPlan?.price}
                </Typography>

                <Typography variant="body1" component="span">
                    /mo
                </Typography>
            </Typography>
            <Box
                sx={{
                    fontSize: "14px",
                    fontWeight: "800",
                    marginBottom: "10px",
                    marginTop: 3
                }}
            >
                (-50+% Discount Forever)
            </Box>
            <Box
                sx={{
                    fontSize: "16px",
                    fontWeight: "800",
                    marginBottom: 3,
                    color: "#FFA114",
                }}
            >
                Billed anually (Save $3000/year)
            </Box>
            <Box>
                {proPlan?.keyFeatures?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                            fontWeight: "400",
                        }}
                    >
                        <CheckIcon
                            sx={{ color: "#FFA114", width: "17px", height: "17px" }}
                        />
                        {item}
                    </Box>
                ))}
            </Box>
            <hr style={{ margin: "10px 0" }} />
            <Box>
                <Typography sx={{ color: "red", marginBottom: "10px" }}>
                    What You're Missing
                </Typography>
                {proPlan["What You're Missing"]?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",

                            fontWeight: "400",
                        }}
                    >
                        <CloseIcon sx={{ width: "17px", height: "17px" }} />
                        {item}
                    </Box>
                ))}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: '#E9901A',
                            paddingX: 6,
                            paddingY: 1.3,
                            borderRadius: 10,
                            marginTop: 4
                        }}
                    >
                        Confirm Upgrade
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

const EnterprisePlan = () => {
    const enterprisePlan = {
        name: "Enterprise Plan",
        price: "Everything included in the Pro Plan, Plus.",
        keyFeatures: [
            "Priority support and a dedicated account manager",
            "Unlimited Team Members",
            "API Access",
            "Reseller Rights",
            "As a creator: Access specific Youtube Channel sponsor tracking so you know who your competitors are getting sponsored by",
            "As a brand: Access specific sponsor tracking so you know who your competitors are sponsoring",
            "Historical sponsor trends and data insights",
            "Creator network: Tap into thousands of the top Youtubers in the world and reach millions of engaged viewers.",
            "Custom Solutions Based On Your Needs",
        ],
    };

    return (
        <Box
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "400",
                    marginBottom: "25px",
                    fontSize: "20px",
                }}
            >
                {enterprisePlan?.name}
            </Typography>
            <Typography sx={{ marginBottom: 4, width: "80%" }}>
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "16px",
                        color: "#FFA114",

                    }}
                >
                    {enterprisePlan?.price}
                </Typography>
            </Typography>
            <Box>
                {enterprisePlan?.keyFeatures?.map((item, index) => (
                    <Box
                        key={index}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "400",
                        }}
                    >
                        <CheckIcon
                            sx={{ color: "#FFA114", width: "17px", height: "17px" }}
                        />
                        {item}
                    </Box>
                ))}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: '#E9901A',
                            paddingX: 6,
                            paddingY: 1.3,
                            borderRadius: 10,
                            marginTop: 24.5
                        }}
                    >
                        Confirm Upgrade
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};