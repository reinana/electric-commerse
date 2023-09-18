import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    selectfavorite,
    toggleFavorite,
} from "../features/favorite/favoriteSlice";
import { openModal } from "../features/modal/ModalSlice";
import { addItem } from "../features/cart/cartSlice";
import "./FavoriteItems.scss";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavoriteItems = () => {
    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector(selectfavorite).filter(
        (item) => item.favorite
    );
    console.log(favoriteList);
    return (
        <div className="favorite-container">
            {favoriteList.map((item) => (
                <div className="item-container">
                    <img
                        src={item.image}
                        alt={item.itemName}
                        onClick={() => dispatch(openModal())}
                    />
                    <div className="favorite-rightSide">
                        <div className="favorite-middle">
                            <h3>{item.itemName}</h3>
                            <p>{item.price}円</p>
                        </div>
                        <div className="item-icon-container">
                            <IconButton
                                className="icon"
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() =>
                                    dispatch(toggleFavorite(item.id))
                                }
                            >
                                {item.favorite ? (
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
                                onClick={() => dispatch(addItem(item.id))}
                            >
                                <AddShoppingCartIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FavoriteItems;
