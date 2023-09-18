import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// style
import "./App.scss";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
// icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppleIcon from "@mui/icons-material/Apple";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// components
import Cart from "./components/Cart";
import Home from "./components/Home";
import Auth from "./components/Auth";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { logout, selectUser } from "./features/user/userSlice";
import FavoriteItems from "./components/FavoriteItems";

const App: React.FC = () => {
    const loginUser = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const confirmLogout = () => {
        const result: boolean = window.confirm("ログアウトしますか？");
        if (result) {
            console.log("ログアウトしました");
            dispatch(logout());
        }
    };
    return (
        // material ui App barからのコピペ
        <BrowserRouter>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            component={Link}
                            to="/"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <AppleIcon />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Electric Commerse
                        </Typography>
                        {loginUser.uid !== "" && (
                            <div>
                                <Button
                                    component={Link}
                                    to="/favorite"
                                    variant="contained"
                                    sx={{ mr: 2, color: "white" }}
                                >
                                    お気に入りリスト
                                </Button>
                                <span>ようこそ {loginUser.userName} さん</span>
                                <IconButton
                                    component={Link}
                                    to="/cart"
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 0.5, ml: 2 }}
                                >
                                    <ShoppingCartIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={confirmLogout}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                {loginUser.uid === "" ? (
                    <Auth />
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/favorite" element={<FavoriteItems />} />
                    </Routes>
                )}
            </div>
        </BrowserRouter>
    );
};

export default App;
