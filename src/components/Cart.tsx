import { Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    decrease,
    increase,
    removeItem,
    selectcart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectcart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = cartItems
            .map((item) => item.amount * item.price)
            .reduce((accum, curr) => accum + curr);
        console.log(totalPrice);
        setTotal(totalPrice);
    }, [cartItems]);
    console.log(cartItems);

    return (
        <div className="container">
            <div className="cart">
                <div className="leftside">
                    <h2>Cart</h2>
                    {cartItems
                        .filter((item) => item.amount > 0)
                        .map((item) => (
                            <div className="cart-container">
                                <div className="cart-item">
                                    <img src={item.image} alt="" />
                                    <h3>Mac Book Air</h3>
                                    <div className="cart-item-info">
                                        <h4>{item.price}円</h4>
                                        <div className="iconbutton">
                                            <IconButton
                                                className="icon"
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{ mr: 2 }}
                                                onClick={() =>
                                                    dispatch(decrease(item.id))
                                                }
                                            >
                                                <RemoveCircleIcon />
                                            </IconButton>
                                            <p>{item.amount} 個</p>
                                            <IconButton
                                                className="icon"
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{ ml: 2 }}
                                                onClick={() =>
                                                    dispatch(increase(item.id))
                                                }
                                            >
                                                <AddCircleIcon />
                                            </IconButton>
                                        </div>
                                        <p
                                            className="delete-item"
                                            onClick={() =>
                                                dispatch(removeItem(item.id))
                                            }
                                        >
                                            カートから削除する
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="rightside">
                    <p>合計 {total}円</p>
                    <Button
                        variant="contained"
                        sx={{ m: 2 }}
                        onClick={() => alert("Sorry! Not Inplemented yet.")}
                    >
                        購入する
                    </Button>
                </div>
            </div>
            <div className="backToHomeButton">

            <Button
                variant="contained"
                component={Link}
                to="/"
                >
                お買い物を続ける
            </Button>
                </div>
        </div>
    );
};

export default Cart;
