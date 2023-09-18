import React, { useCallback, useEffect, useState } from "react";
import "./Category.scss";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { ItemType, itemList } from "../itemData";
import Item from "./Item";

type Props = {
    categoryName: string;
};
const Category = ({ categoryName }: Props) => {
    const [filteredList, setFilteredList] = useState<ItemType[]>([]);
    const [sortType, setSortType] = useState("安い順");


    useEffect(() => {
        let newList = [];
        if (sortType === "安い順") {
            newList = itemList
                .filter((item) => item.category === categoryName)
                .sort((a, b) => a.price - b.price);
        } else {
            newList = itemList
                .filter((item) => item.category === categoryName)
                .sort((a, b) => b.price - a.price);
        }
        setFilteredList(newList);
    }, [categoryName, sortType]);

    const onChangeHandler = (e: SelectChangeEvent<string>) => {
        setSortType(e.target.value as string);
    };
    // const onChangeHandler = useCallback<
    //     React.ChangeEventHandler<HTMLInputElement>
    // >(
    //     (event) => {
    //         setSortType(event.currentTarget.value);
    //     },
    //     [setSortType]
    // );
    return (
        <>
            <div className="sort-box">
                <Box sx={{ width: 400, m: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-sort">Sort</InputLabel>
                        <Select
                            labelId="select-sort"
                            id="select-sort"
                            label="sort"
                            value={sortType}
                            onChange={onChangeHandler}
                        >
                            <MenuItem value={"安い順"}>安い順</MenuItem>
                            <MenuItem value={"高い順"}>高い順</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="category-container">
                {filteredList.map((item) => {
                    return (
                        <div key={item.id}>
                            <Item
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                itemName={item.itemName}
                                price={item.price}
                                image={item.image}
                                description={item.description}
                                amount={item.amount}
                                favorite={item.favorite}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Category;
