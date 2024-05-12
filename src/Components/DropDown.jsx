import React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import { Autocomplete, TextField } from "@mui/material";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    minWidth: "20%",
    Width: 700,
}));

function Dropdown({ values, label, selectedValues, setSelectedValues }) {
    console.log("label", label);
    console.log("values", values);
    const handleChange = (event, newValue) => {
        console.log("event", event.target.value);
        console.log("newValue", newValue);
        setSelectedValues(newValue);
    };

    return (
        <StyledFormControl
            size="small"
            sx={{
                width: "30%",
            }}
        >
            <Autocomplete
                sx={{
                    width: "100%",
                }}
                size="small"
                multiple
                id="fixed-tags-demo"
                value={selectedValues}
                onChange={(event, newValue) => handleChange(event, newValue)}
                options={values.filter((value) => value !== null)}
                getOptionLabel={(value) => (value !== null ? value : 4)}
                renderTags={(selected, getTagProps) =>
                    selected.map((value, index) => (
                        <Chip
                            key={value !== null ? value : 4}
                            label={value !== null ? value : 4}
                            {...getTagProps({ index })}
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField {...params} label={label} placeholder={label} />
                )}
            />
        </StyledFormControl>
    );
}

export default Dropdown;
