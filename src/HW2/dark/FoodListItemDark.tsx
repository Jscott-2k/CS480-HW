import { Console } from 'console';
import React from 'react';
import { Image, Button, Card, Icon, Label, Container } from 'semantic-ui-react';
import { isPropertySignature } from 'typescript';


interface Props {
    price: number;
    imgSrc: string;
    name: string;
    onItemAdd: (cart: Map<string, number>, itemName: string, itemPrice:number, img:string) => Map<string, number>;
    onItemRemove: (cart: Map<string, number>, itemName: string, itemPrice:number, img:string) => Map<string, number>;
    cart: Map<string, number>;
}

interface States {
    cart: Map<string, number>;
}

class FoodListItemDark extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            cart: props.cart
        }
    }

    getQuantityInCart():number{
        if(this.state.cart.get(this.props.name)){
            return this.state.cart.get(this.props.name) as number;
        }else{
            return 0;
        }
    }

    render() {
        console.log(this.state.cart.has(this.props.name) + " - " + this.state.cart.get(this.props.name));
        return (
            <Card>
                <Image src={this.props.imgSrc} wrapped label={<Label ribbon="right" color='red'> ${this.props.price}*</Label>} />
                <Card.Content>
                    <Card.Header> {this.props.name} - ${this.props.price}*</Card.Header> 
                </Card.Content>
                <Card.Content extra>
                    <div className='HW2-Right-Text'>
                    <div>
                        Your cart contains <span>{this.getQuantityInCart()}</span> </div>

                    {/* <Button color='blue' onClick={() => {

                        this.setState({ cart: this.props.onItemRemove(this.state.cart, this.props.name, this.props.price,this.props.imgSrc) });
                    }} disabled={!(this.state.cart.has(this.props.name) && (this.state.cart.get(this.props.name) as number) > 0)}>
                        Remove from Cart
                    </Button> */}


                    <Button color='green' onClick={() => {
                        //console.log("Added fish!");
                        this.setState({ cart: this.props.onItemAdd(this.state.cart, this.props.name, this.props.price,this.props.imgSrc) });
                    }}>
                        <Icon name="add to cart"></Icon>  Add to Cart
                    </Button></div>
                </Card.Content>
            </Card>);
    }
}

export default FoodListItemDark;