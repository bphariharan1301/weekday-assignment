import React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    minWidth: "20%",
    Width: 700,
}));

function Dropdown({ values, label, selectedValues, setSelectedValues }) {
    const handleChange = (event) => {
        setSelectedValues(event.target.value);
    };

    return (
        <StyledFormControl
            size="small"
            sx={{
                width: "30%",
            }}
        >
            <InputLabel>{label}</InputLabel>
            <Select
                sx={{
                    width: "100%",
                }}
                size="small"
                multiple
                label={label}
                value={selectedValues}
                onChange={handleChange}
                renderValue={(selected) => (
                    <div>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </div>
                )}
            >
                {values.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    );
}

export default Dropdown;
