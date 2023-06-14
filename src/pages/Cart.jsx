import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../reponsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({flexDirection: "column"})}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height: 1px;
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrices = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        cart
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>Continuie Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/5205048028720?fmt=webp&qlt=70&wid=1280&hei=1280"/>
                            <Details>
                                <ProductName><b>Prodcut:</b>Guardians of the Galaxy Shirt</ProductName>
                                <ProductId><b>ID:</b>954648164</ProductId>
                                <ProductColor color="maroon" />
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>5</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/5106048028718?fmt=webp&qlt=70&wid=1280&hei=1280"/>
                            <Details>
                                <ProductName><b>Prodcut:</b>Guardians of the Galaxy Shirt</ProductName>
                                <ProductId><b>ID:</b>954648164</ProductId>
                                <ProductColor color="blue" />
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>5</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrices>Subtotal</SummaryItemPrices>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrices>$ 4.99</SummaryItemPrices>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrices>$ -4.99</SummaryItemPrices>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrices>$ 40</SummaryItemPrices>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart