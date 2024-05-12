import React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";
import { Autocomplete, TextField } from "@mui/material";
import { isString } from "lodash";

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
        setSelectedValues(
            newValue.map((value) => {
                console.log("value", value);
                console.log("typeof value: ", typeof value);
                if (
                    isString(value) &&
                    label !== "Company name" &&
                    label !== "Salary currency"
                ) {
                    console.log("Inside If");
                    console.log("value", value.toLowerCase());
                    return value.toLowerCase();
                } else {
                    console.log("Inside Else");
                    return value;
                }
            })
        );
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
                className="dropdown-values"
                value={selectedValues}
                onChange={(event, newValue) => handleChange(event, newValue)}
                options={values.sort().filter((value) => value !== null)}
                getOptionLabel={(value) =>
                    value !== null
                        ? label === "Min base pay"
                            ? String(value) + "k"
                            : value
                        : value
                }
                renderTags={(selected, getTagProps) =>
                    selected.map((value, index) => (
                        <Chip
                            key={
                                value !== null
                                    ? label === "Min base pay"
                                        ? value + "k"
                                        : value
                                    : value
                            }
                            label={
                                value !== null
                                    ? label === "Min base pay"
                                        ? value + "k"
                                        : value
                                    : value
                            }
                            {...getTagProps({ index })}
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        className="dropdown-values"
                        label={label}
                        placeholder={label}
                    />
                )}
            />
        </StyledFormControl>
    );
}

export default Dropdown;
