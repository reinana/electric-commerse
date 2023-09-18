import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { closeModal } from "../features/modal/ModalSlice";
import "./ItemDetail.scss";
import { IconButton } from "@mui/material";
import {
    selectfavorite,
    toggleFavorite,
} from "../features/favorite/favoriteSlice";
import { addItem } from "../features/cart/cartSlice";
//icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";

const ItemDetail = () => {
    const dispatch = useAppDispatch();
    const currentItem = useAppSelector((state) => state.item);

    const favoriteList = useAppSelector(selectfavorite);
    const currentFavorite = favoriteList.find(
        (item) => item.id === currentItem.item.id
    );
    return (
        <div className="modal-container">
            <div className="modal">
                <IconButton
                    className="close-icon"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => dispatch(closeModal())}
                >
                    <CancelIcon />
                </IconButton>
                <img
                    src={currentItem.item.image}
                    alt={currentItem.item.itemName}
                />
                <div className="modal-info">
                    <h2>{currentItem.item.itemName}</h2>
                    <p>{currentItem.item.description}</p>
                    <h3>{currentItem.item.price} 円</h3>
                    <div className="btn-container">
                        <IconButton
                            className="icon"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() =>
                                dispatch(toggleFavorite(currentItem.item.id))
                            }
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
                            onClick={() =>
                                dispatch(addItem(currentItem.item.id))
                            }
                        >
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
