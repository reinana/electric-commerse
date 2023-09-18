import React from "react";
import "./Item.scss";
//icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IconButton } from "@mui/material";
import { addItem } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/ModalSlice";
import {
    toggleFavorite,
    selectfavorite,
} from "../features/favorite/favoriteSlice";
import { setCurrentItem } from "../features/modal/ItemSlice";

type Props = {
    id: number;
    category: string;
    itemName: string;
    price: number;
    image: string;
    description: string;
    amount: number;
    favorite: boolean;
};
const Item = (props: Props) => {
    const { id, itemName, price, image } = props;
    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector(selectfavorite);
    const currentFavorite = favoriteList.find((item) => item.id === id);
    
    return (
        <>
            
            <div className="item-container">
                <img
                    src={image}
                    alt={itemName}
                    onClick={() => {
                        dispatch(openModal())
                        dispatch(setCurrentItem(props))
                    }}
                />
                <h3>{itemName}</h3>
                <p>{price}円</p>
                <div className="item-icon-container">
                    <IconButton
                        className="icon"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => dispatch(toggleFavorite(id))}
                    >
                        {currentFavorite?.favorite ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </IconButton>
                    <IconButton
                        className="icon"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => dispatch(addItem(id))}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default Item;
