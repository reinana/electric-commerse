import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { itemList } from '../itemData';
import { useAppSelector } from '../app/hooks';
import Category from './Category';
import ItemDetail from './ItemDetail';

const Home = () => {
    const categoryList = Array.from(
        new Set(itemList.map((item) => item.category))
    );
    // Material ui のtabをコピペ
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { isOpen } = useAppSelector((state) => state.modal);

    return (
        <>
        {isOpen && <ItemDetail />}
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        {categoryList.map((category, index) => {
                            return (
                                <Tab key={index} label={category} {...a11yProps(index)} />
                            );
                        })}
                    </Tabs>
                </Box>
                {categoryList.map((categoryName, index) => {
                    return (
                        <div key={categoryName} className="container">
                            <CustomTabPanel value={value} index={index}>
                                <Category categoryName={categoryName} />
                            </CustomTabPanel>
                        </div>
                    );
                })}
            </Box>
        </>
    );
}
// Material ui tab をコピペ
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default Home