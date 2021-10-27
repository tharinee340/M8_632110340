import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 0 10px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    &:hover {
        opacity: 0;
    }

`

const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Title = styled.h1`
    color: white;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 600;
`

const CategoryItem = ({item, className}) => {
    return (
        <Container className={className}>
            <Link to={`/products/${item.cate}`}>
            <Image src={item.img} alt={item.title}/>
            <Info>
                <Title>{item.title}</Title>
                <Button variant="light" className="btn-shop">SHOP NOW</Button>
            </Info>
            </Link>    
        </Container>
    )
}
export default styled(CategoryItem)`
    .btn-shop {
        width: 150px;
        color: gray;
        border: none;
        font-weight: 600;
    }
    .btn-shop:hover {
        background-color: black;
        color: white;
    }
`
